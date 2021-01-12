import React,{Component} from 'react';
import http from "./http-common";
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core/styles";

const columns = ["Name", "Balance"];
{/*
const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
*/}
var users =[];


const options = {
  filterType: 'checkbox',
  rowStyle: {
    fontSize: 30,
  },
};

class App extends Component {
  constructor(props){
    super(props);
   //this.state = {users:[]}
  {/*} this.state = {color:'red',brand:'BMW'}; */}
  this.state = {
    page: 0,
    count: 10,
    data: [],
  };

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
           // color: 'red',
            fontWeight:'bold'
          }
        },
        MUIDataTablePagination: {
          root: {
            color: 'blue',
          }
        }
      }
    });

    getData =(page, rowsPerPage) => {
      http.get('users').then(response => {
        return response.data.users;
      })
      .then(data=> {
      // data = data.map(el => Object.values(el));
       data = data.map(item => { return [item.name,item.balance,]})
      this.setState({page, data,});

      });

    }
  componentDidMount()
    {
      this.getData(this.state.page, this.state.count);
    }
  render()
  {
    //const { data } = this.state;
   // const data = this.state.data;
   const { data, page, count } = this.state;
    return(
      <div>
        <div className="box box3d">
          <div className="box-body">
          <div className="panel panel-default">
          <div className="panel-heading">
            USERS
          </div>
          <div className="panel-body">
       
           {/* <h1>The color here is {this.state.color} and car is {this.state.brand} with {this.state.wheels} wheels</h1> */}
            <div className="row">
              <div className ="col-md-2 ">
                <input type ="text" className="form-control" />  
              </div>
              <div className ="col-md-3">
                <button type="button" className="btn btn-warning" onClick={this.changeColor}>Add User</button>
              </div>
            </div>
            <br/>
        
            <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
          
            data ={data}
              columns={columns}
              options={options}
            />
            </MuiThemeProvider>
      
          </div>
          <div className="panel-footer"></div>

          </div>
            
          </div>
        
         </div>
        
         
        
      </div>
     
    );
  }
  
}

export default App;
