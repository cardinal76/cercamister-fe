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
    constructor(private formBuilder: FormBuilder) {}
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
}
