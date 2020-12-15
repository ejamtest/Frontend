import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css';
import Api from '../../Apis/';
import { addDeploymentAction, getDeploymentAction } from '../../Redux/Actions/DeploymentActions';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const BASE_API = 'http://localhost:9000/';

const WelcomePage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [versions, setVersions] = useState([]);
  const [response, setResponse] = useState([]);
  const [value, setValue] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const handleVersionsChange = (event) => {
    setVersions(event.split(','));
  }

  useEffect(() => {
    getDeployments();
  }, []);

  const getDeployments = () => {
    Api.get(`${BASE_API}getTemplate`)
      .then(res => {
        setResponse(res.result);
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && url && versions) {
      let data = {
        templateName: name,
        url: url,
        version: versions,
      };

      axios.post(`${BASE_API}addTemplate`, data, { 'Content-Type': 'application/json' })
        .then(function (response) {
          dispatch(addDeploymentAction(response));
          dispatch(getDeploymentAction(response));
          getDeployments();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast("Please enter valid values");
    }


  }

  const handleDelete = (id) => {
    axios.delete(`${BASE_API}deleteTemplate/${id}`, {
      'Content-Type': 'application/json'
    }).then(() => {
      getDeployments()
    })
  }

  const options = [
    { label: '1.0.0', value: '1.0.0' },
    { label: '1.1.0', value: '1.1.0' },
    { label: '1.2.0', value: '1.2.0' },
    { label: '1.2.1', value: '1.2.1' },
    { label: '1.3.0', value: '1.3.0' },
    { label: '2.0.0', value: '2.0.0' },
    { label: '2.0.1', value: '2.0.1' },
  ]


  return (
    <div>
      <div className="form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-content">
                <form className="pt-5"
                  noValidate
                  onSubmit={(event) => handleSubmit(event)}>
                  <input type="url" onChange={handleUrlChange} className="form-control mb-3" placeholder="Please insert url" />
                  <input type="text" onChange={handleNameChange} className="form-control mb-3" placeholder="Please insert template name" />

                  <MultiSelect
                    placeholder='Please choose versions'
                    onChange={(option) => handleVersionsChange(option)}
                    options={options} className="activity_id_select"
                  />
                  <div className="text-center mt-5 mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>

                <div className="table-responsive">
                  <table className="table table-hover table-fixed text-center mt-5">
                    <thead>
                      <tr>
                        <th scope="col">Url</th>
                        <th scope="col">Name</th>
                        <th scope="col">Version</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        response.map((val, index) =>
                        (
                          <tr>
                            <td key={index}>{val.url}</td>
                            <td key={index}>{val.templateName}</td>
                            {
                              val.version.map((v, i) => {
                                return <span id="grid" key={i}>{(i ? ', ' : '') + v}</span>;
                              })
                            }
                            <td key={index}>{val.deployedAt}</td>
                            <td>
                              <span id="grid" className="icon" onClick={() => handleDelete(val._id)}>
                                <i className="fa fa-trash"></i>
                              </span>
                            </td>
                          </tr>
                        )
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WelcomePage;
