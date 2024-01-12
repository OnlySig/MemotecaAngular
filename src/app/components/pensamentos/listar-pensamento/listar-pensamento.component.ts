import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'I LOVE CLAIDE',
      autoria: 'CarlinhosS',
      modelo: 'modelo3'
    },

    {
      conteudo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et neque iure hic obcaecati accusantium expedita tenetur vel est ut quis placeat, sunt dolores odio ducimus rem exercitationem recusandae culpa inventore. xdddddddddddddddddddddddddddddddddddddddddddddddddd',
      autoria: 'Carlinhos',
      modelo: 'modelo1'
    }
  ]
}

