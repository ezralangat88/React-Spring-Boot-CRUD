import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/user";


class EmployeeService{
    //These methods call rest APIs
    getEmployees(){

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    //Rest API call to get employee by ID TO populate form for editing
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    //Sending updated employee form data Rest API which store to db
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
        
    }

    

} 

export default new EmployeeService()