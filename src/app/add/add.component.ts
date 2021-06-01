import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators , FormArray} from "@angular/forms";
import { HttpServiceService } from '../Service/http-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formGroup:FormGroup;
  path = 'http://localhost:9000/add';
  

  constructor(private formBuilder: FormBuilder,
    private httpService:HttpServiceService) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      contact: ['', [Validators.required,]],
      designation:['', [Validators.required]],
      education: this.formBuilder.array([]),
      experience: this.formBuilder.array([]),
      project: this.formBuilder.array([]),
      hobbies: this.formBuilder.array([]),
  });
  }

  ngOnInit(): void {
  }

  get education(): FormArray {
    return this.formGroup.get('education') as FormArray;
  }

  get experience(): FormArray {
    return this.formGroup.get('experience') as FormArray;
  }
  get project(): FormArray {
    return this.formGroup.get('project') as FormArray;
  }
  get hobbies(): FormArray {
    return this.formGroup.get('hobbies') as FormArray;
  }

  educationForm(): FormGroup {

    return this.formBuilder.group({
      Institute: ['', [Validators.required,]],
      Degree:['', [Validators.required,]],
      PassingPercentage:['', [Validators.required,]],
      PassingYear:['', [Validators.required,]],
      StartDate:['', [Validators.required,]],
      EndDate:['', [Validators.required,]],

    });
  }
  experienceForm(): FormGroup {

    return this.formBuilder.group({
      Company: ['', [Validators.required,]],
      Years:['', [Validators.required,]],
      Salary:['', [Validators.required,]],
      StartDate:['', [Validators.required,]],
      EndDate:['', [Validators.required,]],

    });
  }
  projectForm(): FormGroup {

    return this.formBuilder.group({
      Title: ['', [Validators.required,]],
      Description:['', [Validators.required,]],
    });
  }
  hobbyForm(): FormGroup {

    return this.formBuilder.group({
      Name: ['', [Validators.required,]],

    });
  }

  addEducation(){
    this.education.push(this.educationForm())
    console.log(this.education)
  }

  addExperience(){
    this.experience.push(this.experienceForm())
    console.log(this.experience)
  }

  addProject(){
    this.project.push(this.projectForm())
    console.log(this.project)
  }

  addHobby(){
    this.hobbies.push(this.hobbyForm())
    console.log(this.project)
  }

  final(formGroup:any){
    let a:any= {}
    a.bioData= {
      firstName:formGroup.value.firstName,
      lastName:formGroup.value.lastName,
      email:formGroup.value.email,
      contact:formGroup.value.contact,
      designation:formGroup.value.designation
    }
    a.education = formGroup.value.education
    a.experience = formGroup.value.experience
    a.project = formGroup.value.project
    a.hobbies = formGroup.value.hobbies
    console.log('FINAL FORM GROUP' , a  )

    this.httpService.post(this.path,a).subscribe( val => {
      console.log("post api call", val) 
      formGroup.reset()
    })   
  }
}