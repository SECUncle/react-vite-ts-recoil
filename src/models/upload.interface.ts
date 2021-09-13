export interface hubType {
  name: string;
  id: string;
}

export interface attributesType {
  name: string;
  displayName?: string;
  extension: {
    type: string;
    version: string;
    schema?: {
      href: string;
    };
    data?: { [key: string]: string | Array<string> };
  };
}
export interface hub {
  type: string;
  id: string;
  attributes?: attributesType;
}
export interface hubResult {
  jsonapi?: {
    version: string;
  };
  links?: {
    self: {
      href: string;
    };
  };
  data: Array<hub>;
}

export interface projectType {
  name: string;
  id: string;
}

export interface projectResult {
  jsonapi?: {
    version: string;
  };
  links?: {
    self: {
      href: string;
    };
  };
  data: Array<hub>;
}
export interface folderType {
  name: string;
  id: string;
}

export interface folderResult {
  jsonapi?: {
    version: string;
  };
  links?: {
    self: {
      href: string;
    };
  };
  data: Array<hub>;
}
export interface nestedFolderType {
  name: string;
  id: string;
}

export interface nestedFolderResult {
  jsonapi?: {
    version: string;
  };
  links?: {
    self: {
      href: string;
    };
  };
  data: Array<hub>;
}

export interface createStorageParams {
  jsonapi?: {
    version: string;
  };
  data: {
    type: string;
    attributes: {
      name: string;
    };
    relationships: {
      target: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
}
export interface storageObjectType {
  bucketKey: string;
  objectName: string;
  id: string;
  storageId: string;
}

export interface storageObjectResult {
  jsonapi?: {
    version: string;
  };
  links?: {
    self: {
      href: string;
    };
  };
  data: hub;
}

export interface dataType {
  type: string;
  id: string;
}

export interface included {
  type: string;
  id: string;
  attributes: attributesType;
  relationships: {
    storage: {
      data: dataType;
    };
  };
}
export interface createFirstVersionToFileParams {
  jsonapi?: {
    version: string;
  };
  data: {
    type: string;
    attributes: attributesType;
    relationships: {
      tip: {
        data: dataType;
      };
      parent: {
        data: dataType;
      };
    };
  };
  included: Array<included>;
}

export interface fileObjectType {
  name: string;
  id: string;
}

export interface fileObjectResult {
  bucketKey: string;
  sha1?: string;
  size: string;
  contentType?: string;
  location?: string;
}
