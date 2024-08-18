import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cardtask',
  templateUrl: './cardtask.component.html',
  styleUrl: './cardtask.component.css'
})
export class CardtaskComponent {
  @Input() task: {
    id: number,
    name: string,
    value: number
  } = {
    id: 1,
    name: '',
    value: 0
  }
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  removeTask(){
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.remove.emit();
      }
    });
  }
}
