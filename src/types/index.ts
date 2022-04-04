export type HomeProps = {
	loterias: {
		id: number;
		nome: string;
		concursoId: string;
	}[];
	concurso: {
		id: string;
		loteria: number;
		numeros: string[];
		data: Date;
	};
};

export type LoteriasType = {
	id: number;
	nome: string;
}[];

export type LoteriasConcursosType = {
	loteriaId: number;
	concursoId: string;
}[];

export type ConcursoType = {
	id: string;
	loteria: number;
	numeros: string[];
	data: Date;
};
