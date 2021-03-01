# Attribute in Controller classes


| Column A                  | Column B |
| ------------------------- | -------- |
| `[ApiController]`         |          |
| `[Route("[controller]")]` | S        |

# Attribute in Controller Methods


| Column A                                       | Column B |
| ---------------------------------------------- | -------- |
| `[HttpGet]`                                    |          |
| `[HttpPost]`                                   |          |
| `[HttpPut]`                                    |          |
| `[HttpDelete]`                                 |          |
| `[Route(Constants.EndPoints.API_ENDPOUNT_URL]` | S        |
| `[FromRoute]`                                  | S        |
| `[FromQuery]`                                  | S        |
| `[FromBody]`                                   | S        |
| `Required(AllowEmptyStrings = false)`          | S        |

example contants for urls:
* API_ENDPOUNT_URL: `/controller/operation/{parameterId}`

How to import the connection string:

https://stackoverflow.com/questions/39083372/how-to-read-connection-string-in-net-core

```json
  "ConnectionStrings": {
    "goalstrackerdb": "Server=(localdb)\\mssqllocaldb;Database=aspnet-WebApplica71d622;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
```
in the startup

 ```csharp
 Configuration.GetConnectionString("goalstrackerdb");
 ```


# Return specific error code

```csharp
[HttpGet]
[Route("/pending")]
public async Task<IActionResult> GetPendingScriptsToExecute()
{
    var migrationResult = await _migrationService.GetPendingScripts();
    if (migrationResult.IsFailed)
        return StatusCode(500);

    return Ok(migrationResult.Value);
}
```