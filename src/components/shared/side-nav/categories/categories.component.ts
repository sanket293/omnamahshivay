import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../model/category.model';
import { CategoryService } from '../../../../services/category/category.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]> | undefined ;
  // categories: Category[] = [];
 
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  this.categories$ =  this.categoryService.getCategoryList();
  }


}