import axios from "axios";

const URL = "http://127.0.0.1:8000/api";
const employeeServices = {};

// * Service To Create Employees.
employeeServices.createEmployee = async (data) => {
	let urlSave = `${URL}/create`;

	const response = await axios
		.post(urlSave, data)
		.then((response) => {
			return response.data; // * Controller Response.
		})
		.catch((error) => {
			return error;
		});

	return response;
};

// * Service To List Employees.
employeeServices.listOfEmployees = async () => {
	let urlList = `${URL}/list`;

	const response = await axios
		.get(urlList)
		.then((response) => {
			return response.data; // * Controller Response.
		})
		.catch((error) => {
			return error;
		});

	return response;
};

// * Service To Edit Employees.
employeeServices.editEmployee = async (id) => {
	let urlEdit = `${URL}/edit/${id}`;

	const response = await axios
		.get(urlEdit)
		.then((response) => {
			return response.data; // * Controller Response.
		})
		.catch((error) => {
			return error;
		});

	return response;
};

// * Employees Update Service.
employeeServices.updateEmployee = async (data) => {
	const urlUpdate = `${URL}/update/${data.id}`;

	const response = await axios
		.put(urlUpdate, data)
		.then((response) => {
			return response.data; // * Controller Response.
		})
		.catch((error) => {
			return error;
		});

	return response;
};

export default employeeServices;
