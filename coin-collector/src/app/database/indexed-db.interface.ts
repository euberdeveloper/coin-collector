export interface Ambito {
  id: string;
  display: string;
}

export interface Parametro {
  id ?: number;
  value: string;
}

export interface Unit {
  id ?: number;
  unit: string;
  prefix ?: boolean;
}
