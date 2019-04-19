import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
  	return this.tarefas = this.listAll();

  	this.tarefas = [
  		new Tarefa(1, "GIIG", true),
  		new Tarefa(2, "GIIG", false)
  	];
  }

  listAll(): Tarefa[] {
  	return this.tarefaService.listAll();
  }

  /*remove($event: any, tarefa: Tarefa): void{
  	$event.preventDefault();
  	if (confirm('Remove "' + '"Task ?'))
  }*/

}
