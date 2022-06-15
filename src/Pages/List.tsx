import React from 'react';
import { useNavigate, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import {Title, Button, Label, Text} from '../Components/styles';

export interface IValues {
    [key: string]: any;
}

export interface IFormState {
    id: number,
    product: any;
    values: IValues[];
    submitSuccess: boolean;
    
}

class List extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {},
            values: [],
            submitSuccess: false,
        }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/customers/${this.state.id}`).then(data => {
            this.setState({ product: data.data });
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/customers/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }


    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }

    public render() {
        const { submitSuccess } = this.state;
        return (
            <div className="App">
                {this.state.product &&
                    <div>
                        <Title> Product List App</Title>
                        
                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <Text> Edit Product </Text>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Customer's details has been edited successfully </div>
                                )}
                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group ">
                                        <Label htmlFor="name">  Product Name </Label>
                                        <input type="text" id="name" defaultValue={this.state.product.name} onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="Enter customer's first name" />
                                    </div>
                                    <div className="form-group ">
                                        <Label htmlFor="id"> Product ID</Label>
                                        <input type="text" id="id" defaultValue={this.state.product.id} onChange={(e) => this.handleInputChanges(e)} name="id" className="form-control" placeholder="Enter product's  ID" />
                                    </div>
                                    <div className="form-group ">
                                        <Label htmlFor="category"> Category </Label>
                                        <input type="category" id="category" defaultValue={this.state.product.category} onChange={(e) => this.handleInputChanges(e)} name="category" className="form-control" placeholder="Enter product'scategory" />
                                    </div>
                                    <div className="form-group ">
                                        <Label htmlFor="provider"> Provider </Label>
                                        <input type="text" id="provider" defaultValue={this.state.product.provider} onChange={(e) => this.handleInputChanges(e)} name="provider" className="form-control" placeholder="Enter customer's provider" />
                                    </div>
                                    <div className="form-group ">
                                        <Label htmlFor="price">Price</Label>
                                        <input type="number" id="price" step={0.1} defaultValue={this.state.product.price} onChange={(e) => this.handleInputChanges(e)} name="price" className="form-control" placeholder="R$00,00"/>
                                    </div>                           
                                    <div className="form-group  button">
                                        <Button  className="btn btn-success" type="submit">
                                            Edit Product </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}
 
export default withRouter(List);