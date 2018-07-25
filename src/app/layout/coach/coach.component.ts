import { AllenatoreService } from '../../services/allenatore.service';
import { IstatService } from '../../services/istat.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-coach',
    templateUrl: './coach.component.html',
    styleUrls: ['./coach.component.scss'],
    providers: [ ]
})
export class CoachComponent implements OnInit {
    inserimentoFormAllenatore: string = 'Inserimento Allenatore';
    form: FormGroup;
    submitted = false;
    
    regioneCtrl = null;
    provinciaCtrl = null;
  
    tipoLicenze = null;
  
    regioni = null;
    provincie = null;
    comuni = null;
  
  
    constructor(private formBuilder: FormBuilder, private istatService: IstatService, private allenatoreService: AllenatoreService) {
      this.istatService.getRegioni().subscribe(data => this.regioni = data);
      this.allenatoreService.getTipoLicenza().subscribe(data => this.tipoLicenze = data);
    }
    ngOnInit() {
       this.form = this.formBuilder.group({
          tipoLicenza: [null, Validators.required],
          nome: [null, Validators.required],
          cognome: [null, Validators.required],
          regione: [null, Validators.required],
          provincia: [null, Validators.required],
          comune: [null, Validators.required],
          email: [null, [Validators.required, Validators.email]]
    }  );
    }
    get f() { return this.form.controls; }
    inviaRegistrazione(event) {
       this.submitted = true;
       if (this.form.valid) {
          console.log('form submitted');
      } else {         
          console.log(this.form);
      }
    }
    selezioneProvincie(event){
      this.provinciaCtrl = null;            
      if (event.target.value !==""){
        this.istatService.getProvincie(event.target.value).subscribe(data => this.provincie = data);
      }
    }
  
    selezioneComuni(event){
      if (event.target.value !== ""){
        this.istatService.getComuni(event.target.value).subscribe(data => this.comuni = data);  
      }
    }   
}
