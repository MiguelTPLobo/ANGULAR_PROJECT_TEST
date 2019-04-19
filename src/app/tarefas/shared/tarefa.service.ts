import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listAll(): Tarefa[]{
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastar(tarefa: Tarefa): void{
  	const tarefas = this.listAll();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefa'] = JSON.stringify(tarefa);
  }

  buscarPorId(id: number): Tarefa{
  	const tarefas: Tarefa[] = this.listAll();
  	return tarefas.find(tarefa => tarefa.id === id);
  }
  
  atualizar(tarefa: Tarefa): void{
  	const tarefas: Tarefa[] = this.listAll();
  	tarefas.forEach((obj, index, objs) => {
  		if (tarefa.id === obj.id) {
  			objs[index] = tarefa;
  		}
  	});
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number):void{
  	let tarefas: Tarefa[] = this.listAll();
  	tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void{
  	const tarefas: Tarefa[] = this.listAll();
  	tarefas.forEach((obj, index, objs) => {
  		if(id === obj.id){
  			objs[index].concluida = !obj.concluida;
  		}
  	});
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
