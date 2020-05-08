
export default class APIRecords {
    constructor(_id, CreatedBy,Version,Swagger, apiname,dateCreated,description,access) {
      this._id = _id;
      this.CreatedBy = CreatedBy;
      this.description=description;
      this.Version=Version;
      this.Swagger = Swagger;
      this.apiname = apiname;
      this.dateCreated=dateCreated;
      this.access=access;
    }
  }