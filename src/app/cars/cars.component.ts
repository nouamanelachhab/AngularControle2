import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  i = 0;

  cars = [
    {
      marque: "Ferrari ",
      n_immatriculation: "11ma",
      n_sieges: "4",
      couleur: "violet",
      image: "https://ag-spots-2020.o.auroraobjects.eu/2020/01/25/other/2880-1800-crop-ferrari-488-pista-c380525012020080427_1.jpg",
    },
    {
      marque: "Maserati",
      n_immatriculation: "22ma",
      n_sieges: "4",
      couleur: "blanc",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Maserati_GranTurismo.JPG/1200px-Maserati_GranTurismo.JPG",
    },
    {
      marque: "Mercedes",
      n_immatriculation: "33ma",
      n_sieges: "4",
      couleur: "noir",
      image: "https://img.gocar.be/v7/storage_news/2018/05/mercedesc63amgblacklarge.jpg?width=1200&optipress=3",
    },
    
  ];




  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToCarsDetail(car){

    let ca = 
    {
      marque: "",
      n_immatriculation: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

    ca = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].n_immatriculation === car.n_immatriculation){
        ca = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(ca)]);

  }

}


