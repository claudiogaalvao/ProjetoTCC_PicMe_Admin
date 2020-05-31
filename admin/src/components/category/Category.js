import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategorySummary from './CategorySummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Category extends Component {
    render() {
        const { categories } = this.props;
        return (        
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <h1 className="h3 mb-1 text-gray-800">Categorias</h1>
                            <p className="mb-4">Relação de todas as categorias que um usuário pode selecionar para chamar um fotógrafo. Cada categoria possui suas peculiaridades em relação aos dispositivos que estão inclusos na categoria e preço.</p>

                            <div className="row">
                                <div className="col-lg-12">

                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">

                                        <div>
                                            <Link to='/internal/category/new/category' className="btn btn-success">Nova Categoria</Link>
                                        </div>

                                        <hr className="sidebar-divider"/>

                                        <table className="table">
                                            <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Categoria</th>
                                                <th scope="col">Preço unitário</th>
                                                <th scope="col">Qtd Mínima</th>
                                                <th scope="col">Dispositivos aceitos</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                { categories && categories.map(category=> {
                                                    return (
                                                        <CategorySummary category={category} key={category.id} />
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    
                                    </div>
                                </div>
                                
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.firestore.ordered.category
    }
  }
  
  export default compose (connect(mapStateToProps),
  firestoreConnect([
    { collection: 'category' }
  ]))(Category)