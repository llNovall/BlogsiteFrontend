import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';


@Component({
  selector: 'app-add-edit-tag-form',
  templateUrl: './add-edit-tag-form.component.html',
  styleUrls: ['./add-edit-tag-form.component.scss']
})
export class AddEditTagFormComponent {
  @Input({ required: true }) mode: string = "Add";
  @Input() tag: Tag;
  @Input({required: true}) backNavigation: string = '';

  @Output() submitOut = new EventEmitter<Tag>();


  constructor(private router : Router) {
    this.tag = {id : "", tagName : ""};
  }

  onSubmit(): void {
    this.submitOut.emit(this.tag);
  }

  onBack(): void{
    this.router.navigate([this.backNavigation]);
  }
}

