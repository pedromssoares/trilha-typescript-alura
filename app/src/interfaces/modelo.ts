import { Comparavel } from "../utils/comparavel";
import { Imprimivel } from "../utils/imprimivel";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}