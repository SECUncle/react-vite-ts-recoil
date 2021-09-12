# Notes:

- 1)Use the following autodesk account to pass oauth sign in：

- username:acs_interview@yopmail.com

- password:Aautodesk1

 

- 2)You can skip the step "Register an app", use the following data:

- ClientId: oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS

- Client Secret: Vok15vBX4bq2f8Iy

- Redirect URL: http://localhost:3000

 

- 3)You can skip step 1 to 4, use the following pre-created data:

- HubId: 1ed4bde6-cc07-41a5-bd2d-325f3de5af2a

- ProjectId: 91af84e7-fc2c-4d84-bce2-6d9fe8d2084a

- ForderId: urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ

 

- 4)Step8 is not needed
- 
- 
- 
- curl -v 'https://developer.api.autodesk.com/authentication/v1/gettoken' \
  -X 'POST' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'client_id=oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS' \
  -d 'client_secret=Vok15vBX4bq2f8Iy' \
  -d 'grant_type=authorization_code' \
  -d 'code=wroM1vFA4E-Aj241-quh_LVjm7UldawnNgYEHQ8I' \
  -d 'redirect_uri=http://localhost:3000' \
  -d 'scope=data:create%20data:read%20data:write'

- step1  
- curl -X GET -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoid05RcjlZeWlJbThwZE1QYWNMMTljT21YYzZmY0ZLd2Jkdm9QSm9zZGZZTE1vYWlJVGd4S05xUGxxYXl0N2xEbyIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQyNzI4MX0.fn596p676DL5c0nCbKcPnbQMoNZLVbyw_hR3soaHckILa7r_D_1emBF3lYjR2J4JtM4TymKq8Vi93zei0g8UpBHuiQ5NeXY8f03xWJlCFaTfy92YOwXGQW7-KuFWZ05AGlPQNRxnW9jb3fo7PhSjVNrYxhxYzLwnjeetg_WCf91bYqeO-37RpNwCHYeNUvb3J76yhsvXixCviKQjGY_vcQaLTk9mFm08inDWcDTkAsqdaPMyxgZdpnbNjUqhEG_eFWyzap-Eg7At53ltTaRIUgF-9rgiHJ_J3PUhSlXohQmSHq9VrIWuc1iXLvoLUEgq7KgtZJy4RoAg5w0wV2nucQ" "https://developer.api.autodesk.com/project/v1/hubs"
- 
- result get b.1ed4bde6-cc07-41a5-bd2d-325f3de5af2a
- 
- step2 
- curl -X GET -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoid05RcjlZeWlJbThwZE1QYWNMMTljT21YYzZmY0ZLd2Jkdm9QSm9zZGZZTE1vYWlJVGd4S05xUGxxYXl0N2xEbyIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQyNzI4MX0.fn596p676DL5c0nCbKcPnbQMoNZLVbyw_hR3soaHckILa7r_D_1emBF3lYjR2J4JtM4TymKq8Vi93zei0g8UpBHuiQ5NeXY8f03xWJlCFaTfy92YOwXGQW7-KuFWZ05AGlPQNRxnW9jb3fo7PhSjVNrYxhxYzLwnjeetg_WCf91bYqeO-37RpNwCHYeNUvb3J76yhsvXixCviKQjGY_vcQaLTk9mFm08inDWcDTkAsqdaPMyxgZdpnbNjUqhEG_eFWyzap-Eg7At53ltTaRIUgF-9rgiHJ_J3PUhSlXohQmSHq9VrIWuc1iXLvoLUEgq7KgtZJy4RoAg5w0wV2nucQ" "https://developer.api.autodesk.com/project/v1/hubs/b.1ed4bde6-cc07-41a5-bd2d-325f3de5af2a/projects"
- result get data.attributes.name: 





