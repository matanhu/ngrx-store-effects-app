import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    type = LOAD_PIZZAS;
    payload:any = null;
}

export class LoadPizzasFail implements Action {
    type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any){}
}

export class LoadPizzasSuccess implements Action {
    type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]){}
}

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;