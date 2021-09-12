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
- curl -X GET -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoiVkl6NGhNVXZPdHFpWDRTT2JEMU1BN3p5eEdwczlNTUNabEVXMVljaFVKTmVRbjZ2TmhyOWxoRHphWlNyV3hLWiIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQzMjAyMH0.G-AO3luBEmkVsSPop1gw8-9iuE1obNnVPYVSOfc6bH0s3Sf9DJvK90ZuST3mDRoeVVB5ujsmAMty0dAgz0p42QS6uaMOktUyTOCGQKQbDMGg1X2zGDbvE8v0gC5EoG_WU3JGBRqmnCau03LkXz4THtE0EC3B9m3Aw-cgqTMd047LY8dfqmipzIlaKaiZ_Nj6OBkZZpvNFFIhebrAHp4qctnodYgU6M3JDaW_baDe9p_YRryEc32LVWeoVzw4rNz1Wv9R5lE8QxhRuDIuSxPg4xzG_kaLlArwh_rXYAngh2iDN2rDie5DrcrXHNub_2SkFaRcy2JTzjmcess2X8sciw`" "https://developer.api.autodesk.com/project/v1/hubs"
- 
- result get b.1ed4bde6-cc07-41a5-bd2d-325f3de5af2a
- 
- step2 
- curl -X GET -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoid05RcjlZeWlJbThwZE1QYWNMMTljT21YYzZmY0ZLd2Jkdm9QSm9zZGZZTE1vYWlJVGd4S05xUGxxYXl0N2xEbyIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQyNzI4MX0.fn596p676DL5c0nCbKcPnbQMoNZLVbyw_hR3soaHckILa7r_D_1emBF3lYjR2J4JtM4TymKq8Vi93zei0g8UpBHuiQ5NeXY8f03xWJlCFaTfy92YOwXGQW7-KuFWZ05AGlPQNRxnW9jb3fo7PhSjVNrYxhxYzLwnjeetg_WCf91bYqeO-37RpNwCHYeNUvb3J76yhsvXixCviKQjGY_vcQaLTk9mFm08inDWcDTkAsqdaPMyxgZdpnbNjUqhEG_eFWyzap-Eg7At53ltTaRIUgF-9rgiHJ_J3PUhSlXohQmSHq9VrIWuc1iXLvoLUEgq7KgtZJy4RoAg5w0wV2nucQ" "https://developer.api.autodesk.com/project/v1/hubs/b.1ed4bde6-cc07-41a5-bd2d-325f3de5af2a/projects"
- result get data.attributes.name: 
- 
- 
- 
- step4
- curl -X GET -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoiVkl6NGhNVXZPdHFpWDRTT2JEMU1BN3p5eEdwczlNTUNabEVXMVljaFVKTmVRbjZ2TmhyOWxoRHphWlNyV3hLWiIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQzMjAyMH0.G-AO3luBEmkVsSPop1gw8-9iuE1obNnVPYVSOfc6bH0s3Sf9DJvK90ZuST3mDRoeVVB5ujsmAMty0dAgz0p42QS6uaMOktUyTOCGQKQbDMGg1X2zGDbvE8v0gC5EoG_WU3JGBRqmnCau03LkXz4THtE0EC3B9m3Aw-cgqTMd047LY8dfqmipzIlaKaiZ_Nj6OBkZZpvNFFIhebrAHp4qctnodYgU6M3JDaW_baDe9p_YRryEc32LVWeoVzw4rNz1Wv9R5lE8QxhRuDIuSxPg4xzG_kaLlArwh_rXYAngh2iDN2rDie5DrcrXHNub_2SkFaRcy2JTzjmcess2X8sciw"
    "https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/folders/urn:adsk.wipprod:fs.folder:co.h1gPOVSWS6GNk9uwCMqCXA/contents"


- step5
- curl -X POST -H "Content-Type: application/vnd.api+json" -H "Accept: application/vnd.api+json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoiZHFJOTd4T1F6SmNBNm85Y3VGZzd5SWRDSGRocWl4QVllYTA2UFRaYWVra3VsSTNRbHVWQzFVOUxPSVdUSVVjNiIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQzNjE2M30.IRqbbq3JW449gGTJJJ_gS8VCepkxSfyzAec2yBBE2qF6SS7WtpeC5mOVqjN_3CX1mEko6PqQ8ESwInbOoYiDdSijD-jUQlMb2l8r4nfilFJ2PjoNDshqy-QgmarEIkIwnwGAMXRHr6NmMtlyCAq_O9bnaTXi98NRaMef8RR5kUeVh9oR_ZJERM7SXVvxMDi-9Xe0Yr9aNxFDoIGmWKJQtY_7rITyu4Q7fX9C8iVRpUGxrDFwP6evkLHaRWncNUbZP99MQmn4nK8_hH_baMrU9PzF2MFTEJyNtNxMZBvwmYDKF3zECcTr6XzafEqEZ1qgRqrzNGhCW9E-4epgMCPLpg" "https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/storage" -d '{
      "jsonapi": { "version": "1.0" },
      "data": {
        "type": "objects",
        "attributes": {
          "name": "WangYaJu.png"
        },
        "relationships": {
          "target": {
            "data": { "type": "folders", "id": "urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ" }
          }
        }
      }
}'


{

{"jsonapi":{"version":"1.0"},"data":{"type":"objects","id":"urn:adsk.objects:os.object:wip.dm.prod/a54cadb8-4fa5-4a94-8f5a-cd2f88f29bc5.png","relationships":{"target":{"data":{"type":"folders","id":"urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ"},"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/folders/urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ"}}}}}}%                                   wangyaju@wangyajudeMacBook-Pro workspace % 


{"jsonapi":{"version":"1.0"},"data":{"type":"objects","id":"urn:adsk.objects:os.object:wip.dm.prod/f3122546-de8f-411f-abe0-aea373d81897.png","relationships":{"target":{"data":{"type":"folders","id":"urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ"},"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/folders/urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ"}}}}}}% 



- step6 curl -X PUT -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoiZHFJOTd4T1F6SmNBNm85Y3VGZzd5SWRDSGRocWl4QVllYTA2UFRaYWVra3VsSTNRbHVWQzFVOUxPSVdUSVVjNiIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQzNjE2M30.IRqbbq3JW449gGTJJJ_gS8VCepkxSfyzAec2yBBE2qF6SS7WtpeC5mOVqjN_3CX1mEko6PqQ8ESwInbOoYiDdSijD-jUQlMb2l8r4nfilFJ2PjoNDshqy-QgmarEIkIwnwGAMXRHr6NmMtlyCAq_O9bnaTXi98NRaMef8RR5kUeVh9oR_ZJERM7SXVvxMDi-9Xe0Yr9aNxFDoIGmWKJQtY_7rITyu4Q7fX9C8iVRpUGxrDFwP6evkLHaRWncNUbZP99MQmn4nK8_hH_baMrU9PzF2MFTEJyNtNxMZBvwmYDKF3zECcTr6XzafEqEZ1qgRqrzNGhCW9E-4epgMCPLpg" --data-binary /Users/wangyaju/Documents/workspace/react-vite-admin/test01.png "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/f3122546-de8f-411f-abe0-aea373d81897.png"



<!-- /Users/wangyaju/Documents/workspace/react-vite-admin/WangYaJu.png -->


{
  "bucketKey" : "wip.dm.prod",
  "objectId" : "urn:adsk.objects:os.object:wip.dm.prod/a54cadb8-4fa5-4a94-8f5a-cd2f88f29bc5.png",
  "objectKey" : "a54cadb8-4fa5-4a94-8f5a-cd2f88f29bc5.png",
  "sha1" : "7c7ad7f2240619331bf4edde4d2aaedadd4c1675",
  "size" : 65,
  "contentType" : "application/x-www-form-urlencoded",
  "location" : "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/a54cadb8-4fa5-4a94-8f5a-cd2f88f29bc5.png"
}%  

{
  "bucketKey" : "wip.dm.prod",
  "objectId" : "urn:adsk.objects:os.object:wip.dm.prod/f3122546-de8f-411f-abe0-aea373d81897.png",
  "objectKey" : "f3122546-de8f-411f-abe0-aea373d81897.png",
  "sha1" : "32ae4c610b3cc03b39448afe1852a85f4fd975e6",
  "size" : 63,
  "contentType" : "application/x-www-form-urlencoded",
  "location" : "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/f3122546-de8f-411f-abe0-aea373d81897.png"
}%      


- step7 curl -X POST -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoiZHFJOTd4T1F6SmNBNm85Y3VGZzd5SWRDSGRocWl4QVllYTA2UFRaYWVra3VsSTNRbHVWQzFVOUxPSVdUSVVjNiIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQzNjE2M30.IRqbbq3JW449gGTJJJ_gS8VCepkxSfyzAec2yBBE2qF6SS7WtpeC5mOVqjN_3CX1mEko6PqQ8ESwInbOoYiDdSijD-jUQlMb2l8r4nfilFJ2PjoNDshqy-QgmarEIkIwnwGAMXRHr6NmMtlyCAq_O9bnaTXi98NRaMef8RR5kUeVh9oR_ZJERM7SXVvxMDi-9Xe0Yr9aNxFDoIGmWKJQtY_7rITyu4Q7fX9C8iVRpUGxrDFwP6evkLHaRWncNUbZP99MQmn4nK8_hH_baMrU9PzF2MFTEJyNtNxMZBvwmYDKF3zECcTr6XzafEqEZ1qgRqrzNGhCW9E-4epgMCPLpg"  -H "Content-Type: application/vnd.api+json" -H "Accept: application/vnd.api+json" "https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items" -d '{
    "jsonapi": { "version": "1.0" },
    "data": {
      "type": "items",
      "attributes": {
        "displayName": "test01.png",
        "extension": {
          "type": "items:autodesk.bim360:File",
          "version": "1.0"
        }
      },
      "relationships": {
        "tip": {
          "data": {
            "type": "versions", "id": "1"
          }
        },
        "parent": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:fs.folder:co.h1gPOVSWS6GNk9uwCMqCXA"
          }
        }
      }
    },
    "included": [
      {
        "type": "versions",
        "id": "1",
        "attributes": {
          "name": "WangYaJu.png",
          "extension": {
            "type": "versions:autodesk.bim360:File",
            "version": "1.0"
          }
        },
        "relationships": {
          "storage": {
            "data": {
              "type": "objects",
              "id": "urn:adsk.objects:os.object:wip.dm.prod/f3122546-de8f-411f-abe0-aea373d81897.png"
            }
          }
        }
      }
    ]
  }'



{"jsonapi":{"version":"1.0"},"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA"}},"data":{"type":"items","id":"urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA","attributes":{"displayName":"WangYaJu.png","createTime":"2021-09-12T08:06:34.0000000Z","createUserId":"V4WXJ8PYZVPC","createUserName":"Foo Bar","lastModifiedTime":"2021-09-12T08:06:34.0000000Z","lastModifiedUserId":"V4WXJ8PYZVPC","lastModifiedUserName":"Foo Bar","hidden":false,"reserved":false,"extension":{"type":"items:autodesk.bim360:File","version":"1.0","schema":{"href":"https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0"},"data":{"sourceFileName":"WangYaJu.png"}}},"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA"},"webView":{"href":"https://acc.autodesk.com/docs/files/projects/91af84e7-fc2c-4d84-bce2-6d9fe8d2084a?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.h1gPOVSWS6GNk9uwCMqCXA&entityId=urn%3Aadsk.wipprod%3Adm.lineage%3AzWQ337PMRF-oCeGOaNqcHA"}},"relationships":{"tip":{"data":{"type":"versions","id":"urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA?version=1"},"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/tip"}}},"versions":{"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/versions"}}},"parent":{"data":{"type":"folders","id":"urn:adsk.wipprod:fs.folder:co.h1gPOVSWS6GNk9uwCMqCXA"},"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/parent"}}},"refs":{"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/relationships/refs"},"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/refs"}}},"links":{"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/items/urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA/relationships/links"}}}}},"meta":{"bim360DmCommandId":"d1750026-f74a-4b85-932d-f33e71719bac"},"included":[{"type":"versions","id":"urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA?version=1","attributes":{"name":"WangYaJu.png","displayName":"WangYaJu.png","createTime":"2021-09-12T08:06:34.0000000Z","createUserId":"V4WXJ8PYZVPC","createUserName":"Foo Bar","lastModifiedTime":"2021-09-12T08:06:34.0000000Z","lastModifiedUserId":"V4WXJ8PYZVPC","lastModifiedUserName":"Foo Bar","versionNumber":1,"storageSize":63,"fileType":"png","extension":{"type":"versions:autodesk.bim360:File","version":"1.0","schema":{"href":"https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:File-1.0"},"data":{"processState":"NEEDS_PROCESSING","sourceFileName":"WangYaJu.png"}}},"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1"},"webView":{"href":"https://acc.autodesk.com/docs/files/projects/91af84e7-fc2c-4d84-bce2-6d9fe8d2084a?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.h1gPOVSWS6GNk9uwCMqCXA&entityId=urn%3Aadsk.wipprod%3Afs.file%3Avf.zWQ337PMRF-oCeGOaNqcHA%3Fversion%3D1"}},"relationships":{"item":{"data":{"type":"items","id":"urn:adsk.wipprod:dm.lineage:zWQ337PMRF-oCeGOaNqcHA"},"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1/item"}}},"links":{"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1/relationships/links"}}},"refs":{"links":{"self":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1/relationships/refs"},"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1/refs"}}},"downloadFormats":{"links":{"related":{"href":"https://developer.api.autodesk.com/data/v1/projects/b.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a/versions/urn:adsk.wipprod:fs.file:vf.zWQ337PMRF-oCeGOaNqcHA%3Fversion=1/downloadFormats"}}},"derivatives":{"data":{"type":"derivatives","id":"dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpXUTMzN1BNUkYtb0NlR09hTnFjSEE_dmVyc2lvbj0x"},"meta":{"link":{"href":"https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpXUTMzN1BNUkYtb0NlR09hTnFjSEE_dmVyc2lvbj0x/manifest?scopes=b360project.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a,O2tenant.18660394"}}},"thumbnails":{"data":{"type":"thumbnails","id":"dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpXUTMzN1BNUkYtb0NlR09hTnFjSEE_dmVyc2lvbj0x"},"meta":{"link":{"href":"https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpXUTMzN1BNUkYtb0NlR09hTnFjSEE_dmVyc2lvbj0x/thumbnail?scopes=b360project.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a,O2tenant.18660394"}}},"storage":{"data":{"type":"objects","id":"urn:adsk.objects:os.object:wip.dm.prod/f3122546-de8f-411f-abe0-aea373d81897.png"},"meta":{"link":{"href":"https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/f3122546-de8f-411f-abe0-aea373d81897.png?scopes=b360project.91af84e7-fc2c-4d84-bce2-6d9fe8d2084a,O2tenant.18660394"}}}}}]}%    