import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bairro : any;
  localidade : any;
  logradouro : any;
  uf : any;

  constructor(private postsService : PostsService, private toastCtrl :  ToastController) {}

  localizarObjeto(evento : any) {
    let codigoObjeto = evento.detail.value;

    this.postsService.localizarObjeto(codigoObjeto)
    .then(response=>{
      let cep : any = response;
      this.bairro = cep.bairro;
      this.localidade = cep.localidade;
      this.logradouro = cep.logradouro;
      this.uf = cep.uf;

      console.log(response);
      console.log(cep.bairro);
    })
    .catch(erro=>{
      console.log(erro);
      this.enviarToast('CEP não encontrado!')
    });
  }

  async enviarToast(mensagem : string){
    const toast = await this.toastCtrl.create({
      message: mensagem,
      //duration: 2000,
      color: 'dark',
      position: 'middle',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      }],
    });
    toast.present();
  }
}
