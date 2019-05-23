import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        let data = this.props.data;
        return (
            <div id="footer" className="my-containers">
            <div className="row">
              <div className="section">
                <div className="col-md-12">
                      <p className="copyright">Design + Code by <a href="#a" target="_blank">{data.name}</a> <i className="fa fa-coffee"></i> 2019</p>
                  </div>
              </div> 
            </div> 
          </div>
        )
    }
}

export default Footer
