import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core/styles";

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
  rowStyle: {
    fontSize: 30,
  },
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {color:'red',brand:'BMW'};
  }
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
           
          },
          paper: {
          
          }
        },
        MUIDataTableBodyCell: {
          root: {
            
          }
        },
        MUIDataTableHeadCell: {
          root: {
            color: 'orange',
          }
        },
        MUIDataTablePagination: {
          root: {
            color: 'blue',
          }
        }
      }
    });
  componentDidMount()
    {
      setTimeout(() => {
        this.setState({color: "blublacke"})
      }, 1000)
    }
    changeColor =() =>{
      this.setState({color: 'changed',brand:'subaru',wheels:'4'})
    }
    componentDidUpdate() {
      console.log('updated to-->'+this.state.color);
    }
  render()
  {
    return(
      <div>
        <div class="box box3d">
          <div class="box-body">
          <div class="panel panel-default">
          <div class="panel-heading">
            ssss
          </div>
          <div class="panel-body">
            <h1>The color here is {this.state.color} and car is {this.state.brand} with {this.state.wheels} wheels</h1>
            <div class="row">
              <div class ="col-md-2 ">
                <input type ="text" class="form-control" value={this.state.color} />  
              </div>
              <div class ="col-md-3">
                <button type="button" class="btn btn-warning" onClick={this.changeColor}>Change color</button>
              </div>
            </div>
            <br/>
        
            <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
             
              data={data}
              columns={columns}
              options={options}
            />
            </MuiThemeProvider>
      
          </div>
          <div class="panel-footer"></div>

          </div>
            
          </div>
        
         </div>
        
         
        
      </div>
     
    );
  }
  
}

export default App;
