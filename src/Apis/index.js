import fetch from 'cross-fetch';

const Api = {
  get: function (url) {
    return (
      fetch (url, {
        method: 'GET',
        headers: this._setAuthHeaders (),
      })
        .then (this._parseJSON)
    );
  },

  put: function (url, data) {
    return (
      fetch (url, {
        method: 'PUT',
        headers: this._setAuthHeaders (),
        body: JSON.stringify (data),
      })
        .then (this._parseJSON)
    );
  },

  postFormData: function (url, data) {
    return (
      fetch (url, {
        method: 'POST',
        headers: this._setAuthHeaders (),
        body: data,
      })
        // .then(this._checkStatus)
        .then (this._formData)
    );
    // .then(this._getData);
  },

  _checkStatus: function (json) {
    if (json.status >= 200 && json.status < 300) {
      return json;
    } else {
      throw json;
    }
  },

  _parseJSON: function (response) {
    if (response.status === 404) {
      return response.json ();
    } else if (response.status === 501) {
      return response.json ();
    } else {
      return response.json ();
    }
  },
  _getData: function (json) {
    return json;
  },
  _formData: function (response) {
    if (response.status === 400) {
      
      return response.json ();
    } else {
      return response.json ();
    }
  },

  _setAuthHeaders: function () {
    const headers = {
      'Content-Type': 'application/json',
    };
    return headers;
  },
};

export default Api;