# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

* Title: Function/API to add custom IDs for agents on facilities
  - Description: Create an endpoint that takes in facility ID alongside agent's custom ID on admin role for facility, assign said custom ID to agent for future reference.
  - Implementation details: 
    - create a migration to add column `custom_id` to agents table.
    - Add api docs for this api. 
    - Create PUT request to handle this request. 
    - User from facility admin role will be access the api via token.
  - Acceptance Criteria:
    - Facility admins add custom ids against the agents
    - API updates custom ID against said agent on facility
    - Facility admin cannot update custom id of another agent on another facility
    - Response should return agent data with updated info
  - Estimates: 6 HOURS
  - Assignee: Backend Developer
  

* Title: FrontEnd Ability to add custom ID against the agent
  - Description: Submit the custom ID details of agent against a facility and display the response data from the endpoint.
  - Implementation details: 
    - Create a form to select agent and add custom id aginst the agent.
    - Send the payload to the endpoint
    - Update the UI after receivng the response from endpoint
  - Acceptance Criteria:
    - Facility admins would only be update there respective agents custom ids.
    - Facility admins cannot update other facility agents data
  - Estimates: 4 HOURS
  - Assignee: Front Developer

* Title: Modify `generateReport` endpoint to generate by custom id.
  - Description: Modify the `generateReport` endpoint to generate PDF with a filter, said filter would be the newly added custom IDs on agents, must adhere to old generateReport rules as admin role only.
  - Implementation details: 
    - If agents customid is not available display 'n/a'
    - Add a columns to display custom id againts agents id
    - Generate the file and save it to s3
  - Acceptance Criteria:
    - If agents customid is not available display 'n/a'
    - Add a columns to display custom id againts agents id
    - Generate the file and save it to s3
  - Estimates: 6 HOURS
  - Assignee: Backend Developer
 

