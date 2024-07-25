import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [DetailProduitComponent, CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {
  @Input() produit: any;
  @Output() retour = new EventEmitter<void>();

  retourArriere(): void {
    this.retour.emit();
  }

}
