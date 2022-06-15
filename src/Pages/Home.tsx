import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import {Title, Button, Li} from '../Components/styles';


interface IState {
    products: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { products: [] }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/products`).then(data => {
            this.setState({ products: data.data })
        })
    }

    public deleteProduct(id: number) {
        axios.delete(`http://localhost:5000/customers/${id}`).then(data => {
            const index = this.state.products.findIndex(product => product.id === id);
            this.state.products.splice(index, 1);
            this.props.history.push('/');
        })
    }

    public render() {
        const products = this.state.products;
        return (
            <div>
                {products.length === 0 && (
                    <div className="text-center">
                        <Title>No product found at the moment</Title>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <div className="table ">
                            <ul>
                                
                                    <Li >Product Name</Li>
                                    <Li >Product ID</Li>
                                    <Li >Category</Li>
                                    <Li >Provider</Li>
                                    <Li >Price</Li>                            
                                    <Li >Actions</Li>
                            </ul>
                            
                            <ul>
                                {products && products.map(product =>
                                    <ul key={product.id}>
                                        <Li>{product.name}</Li>
                                        <Li>{product.id}</Li>
                                        <Li>{product.email}</Li>
                                        <Li>{product.provider}</Li>
                                        <Li>{product.price}</Li>
                                      
                                        <Li>
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group" style={{ marginBottom: "20px" }}>
                                            <Link to={`edit/${product.id}`} className="btn">Edit Product </Link>
                                            <Button  className="btn " onClick={() => this.deleteProduct(product.id)}>Delete Product</Button>
                                        </div>
                                    </div>
                                        </Li>
                                    </ul>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}