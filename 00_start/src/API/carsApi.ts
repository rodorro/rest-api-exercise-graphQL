import { Car } from './carsApiModel';
import axios from 'axios';
const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
    return axios.get<Car[]>(`${baseUrl}/api/cars`).then(result => {
        return result.data;
    });
}

export const getCarById = (id) => {
    return axios.get<Car>(`${baseUrl}/api/cars/${id}`).then(result => {
        return result.data;
    });
}

export const addCar = (car) => {
    return axios.post<Car>(`${baseUrl}/api/cars`, car);
};

export const updateCar = (id, car) => {
    return axios.put<Car>(`${baseUrl}/api/cars/${id}`, car);
};

export const deleteCar = (id) => {
    return axios.delete(`${baseUrl}/api/cars/${id}`);
};