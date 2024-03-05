# Fillout API Implementation

### Introduction
This repo is a demo of the Fillout Submission API endpoint with the added functionality of filtering. In addition to the API endpoint, there's a test utility landing page written in React, that would allow the user to insert a valid JSON string of the filtering parameters and get the API response back.

### Features
* Users can query the API with newly added filters of "equals" | "does_not_equal" | "greater_than" | "less_than"
* Users can demo the API endpoint for the landing page

### API Endpoints
| HTTP Verbs | Endpoint | Action
| --- | --- | ---|
| GET | /api/:formId/filteredResponses | To retrieve filtred responses

### Anatomy of endpoint
When using this endpoint, it should look like this:
``` /api/:formId/filteredResponses?[filters]&[limit]&[offset] ```

Below is a breakdown of the different pieces in the endpoint:
1. All api endpoints are prefixed with `/api/`.
2. `:formId` is the id of the form your are retrieving responses from
3. `filters` is used for conditional filtering of records, it should be a url encoded JSON string
4. `limit` is used to limit the number of responses
5. `offset` is used to to set the starting position of the records being fetched

### Pagination
To get pagination to work, I started with the assumption that the items being paginated would be the filtered results. With this being the case, the API call to the Fillout API is made using the default limit and offset. From there the limit and offset it used to paginate the records after they have been filtered.

### Example
Let's say we want to fetch the response of a form where the user's name is `Jane`. From the available records we know the field ID so we would set the filter as follows:
```
[
    {
        "id": "bE2Bo4cGUv49cjnqZ4UnkW",
        "condition": "equals",
        "value": "Jane"
    }
]
```

We would get the following response:
```
{
	"responses": [
		{
			"submissionId": "f9b8b405-6ca9-41f3-a03f-d5a563dfa0f6",
			"submissionTime": "2024-02-27T20:49:43.783Z",
			"lastUpdatedAt": "2024-02-27T20:49:43.783Z",
			"questions": [
				{
					"id": "4KC356y4M6W8jHPKx9QfEy",
					"name": "Anything else you'd like to share before your call?",
					"type": "LongAnswer",
					"value": "I'm excited for it!"
				},
				{
					"id": "bE2Bo4cGUv49cjnqZ4UnkW",
					"name": "What is your name?",
					"type": "ShortAnswer",
					"value": "Jane"
				},
				{
					"id": "dSRAe3hygqVwTpPK69p5td",
					"name": "Please select a date to schedule your yearly check-in.",
					"type": "DatePicker",
					"value": "2021-08-23"
				},
				{
					"id": "fFnyxwWa3KV6nBdfBDCHEA",
					"name": "How many employees work under you?",
					"type": "NumberInput",
					"value": 10
				},
				{
					"id": "jB2qDRcXQ8Pjo1kg3jre2J",
					"name": "Which department do you work in?",
					"type": "MultipleChoice",
					"value": "Recruiting"
				},
				{
					"id": "kc6S6ThWu3cT5PVZkwKUg4",
					"name": "What is your email?",
					"type": "EmailInput",
					"value": "jane@fillout.com"
				}
			],
			"calculations": [],
			"urlParameters": [],
			"quiz": {},
			"documents": []
		}
	],
	"totalResponses": 1,
	"pageCount": 1
}
```


### Technologies Used
* [NodeJS](https://nodejs.org) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server.
* [ExpressJS](https://www.expressjs.org) This is a NodeJS web application framework.
* [Railway](https://railway.app/) The hosting solution being used

### Demo
The demo can be found [here](https://fillout-api-demo-production.up.railway.app/).
