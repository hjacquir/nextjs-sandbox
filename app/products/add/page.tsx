import Form from "next/form";
import {AddProduct} from '../actions'

export default function Add() {
    return (
        <>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Ajouter
                </h1>
                <Form action={AddProduct}>
                    <label>Nom : </label>
                    <input name="name" type="text" />
                    <div>
                        <button type="submit">Enregistrer</button>
                    </div>
                </Form>
            </div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            </div>
        </>
    );
}
