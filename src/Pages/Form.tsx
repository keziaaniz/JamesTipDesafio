import React from 'react';
import { useNavigate, withRouter } from 'react-router-dom';
import axios from 'axios';
import {Title, Button, Label} from '../Components/styles';



export interface IValues {
    name: string,
    id: string,
    category: string,
    provider: string,
    price: string,
    
}

export interface IFormState {
    
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
}



class Form extends React.Component<useNavigate, IFormState> {
    const navigate = useNavigate();

    constructor(props: navigate) {
        super(props);
        this.state = {
            name: '',
            id: '',
            category: '',
            provider: '',
            price: '',
            values: [],
            submitSuccess: false,
        }
    } 

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            name: this.state.name,
            id: this.state.id,
            category: this.state.category,
            provider: this.state.provider,
            price: this.state.price,
        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:5000/customers`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const { submitSuccess } = this.state;
        return (
            <div>
                <div className={"form-wrapper"}>
                    <Title> Register your PRODUCT </Title>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to create a new post
                        </div>
                    )}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                            </div>
                    )}
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-container ">
                            <div className="form-container first">
                                <div className="form-group ">
                                    <Label htmlFor="name"> Product Name</Label>
                                    <input type="text" id="name" onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="Enter product's  name" />
                                </div>
                                <div className="form-group ">
                                    <Label htmlFor="id"> Product ID</Label>
                                    <input type="text" id="id" onChange={(e) => this.handleInputChanges(e)} name="id" className="form-control" placeholder="Enter product's ID"  />
                                </div>
                            </div>
                            <div className="form-container second"> 
                                <div className="form-group ">
                                    <Label htmlFor="category">Category </Label>
                                    <input type="category" id="category" onChange={(e) => this.handleInputChanges(e)} name="category" className="form-control" placeholder="Enter product's category" />
                                </div>
                                <div className="form-group ">
                                    <Label htmlFor="provider"> Provider </Label>
                                    <input type="text" id="provider" onChange={(e) => this.handleInputChanges(e)} name="provider" className="form-control" placeholder="Enter product's provider" />
                                </div>
                                <div className="form-group ">
                                    <Label htmlFor="price">Price </Label>
                                    <input type="number" id="price" step={0.1}  onChange={(e) => this.handleInputChanges(e)} name="price" className="form-control" placeholder="R$00,00" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group button">
                            <Button className="btn btn-success" type="submit">
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default withRouter(Form)