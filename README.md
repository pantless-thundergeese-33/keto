# keto

## UI Tree

```txt
App
   |LoginContainer
      |Login
      |Guest
   |HomeContainer
      |SearchContainer
         |Search (dropdown)
         |QueriesContainer (CheckDisplay, CheckBtn, AddBtn)
            |ElectricityQueries
            |DriveQueries
            |FlightQueries
            |RunQueries
      |CartContainer
         |ActivityDisplay (DeleteBtn)
         |TotalsDisplay
```

## Example of how API data should be structured

```txt
POST request
headers:
  Authorization: Bearer gvwgBGeBXt6aeorzf8QVxQ,
  Content-Type: application/json

request body
  {
    type: electricity,
    electricity_unit: "mwh",
    country: "",
    *state: ""
  }

response body
  {
    id:
    type:
    data {
      attributes: {
        country:
        state:
        electricity_unit:
        electricity_value:
        estimated_at:
        carbon_g:
        carbon_lb:
        carbon_kg:
        carbon_mt:
      }
    }
  }
```
