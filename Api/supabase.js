import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto'
const supabaseURL = 'https://ivpiokabkolqszvltvfk.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cGlva2Fia29scXN6dmx0dmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3OTIwMTUsImV4cCI6MjAwNTM2ODAxNX0.ijGLgWz4l9DVSCNDy0SQNs1koy64CRJvADNXbbjSROA';

// const supabaseURL = process.env.SUPABASE_URL;
// const supabaseApiKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseApiKey);

// === === === === === === === CITAS  === === === === === === === 
export async function getCitas() {
    console.log(supabaseURL);
    console.log(supabaseApiKey);
    try {
        let selectQuery = 'id, Paciente (id, nombre), Procedimiento (id, nombre), fecha, hora, EstadoCita (id, estado), created_at'
        const { data, error } = await supabase.from('Cita').select(selectQuery).eq('estado_id', 1);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Citas: ', error.message);
        return null;
    }
}

export async function getCita(cita_id) {
    try {
        let selectQuery = 'id, Paciente (id, nombre, edad, genero, domicilio, alergias, foto), Procedimiento (id, nombre, descripcion), fecha, hora, created_at'
        const { data, error } = await supabase.from('Cita').select(selectQuery).eq('id', cita_id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Cita', error.message);
        return null;
    }
}

export async function insertCita(paciente_id, procedimiento_id, fecha, hora) {
    try {
        const { data, error } = await supabase.from('Cita').insert([{ paciente_id, procedimiento_id, fecha, hora }])
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Citas: ', error.message);
        return null;
    }
}

// === === === === === === === Pacientes  === === === === === === === 
export async function getNombresPacientes() {
    try {
        const { data, error } = await supabase.from('Paciente').select('id, nombre');
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Pacientes: ', error.message);
        return null;
    }
}

// === === === === === === === Procedimientos  === === === === === === === 
export async function getNombresProcedimientos() {
    try {
        const { data, error } = await supabase.from('Procedimiento').select('id, nombre');
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Pacientes: ', error.message);
        return null;
    }
}