import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../../services/data.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// More(Highcharts);
// SolidGauge(Highcharts);
export interface VendorElement {
  name: string;
  status: string;
  licence: string;
  teams: string;
  role?: string;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    HighchartsChartModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    CommonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule, MatButtonModule

  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'status', 'role', 'license_used', 'teams', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  gridData: any[] = [];
  isLoading = false;

  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dialog!: MatDialog;

  constructor(private data: DataService, private dialogService: MatDialog) {
    this.dialog = dialogService;

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getData().subscribe((data: any) => {
      this.displayedColumns = ['name', 'status', 'role', 'license_used', 'teams', 'actions'];

      // this.displayedColumns = data.grid_columns.map((column: any) => column.column_key);
      this.dataSource.data = data.grid_data;
      this.gridData = data.grid_data;
      this.isLoading = false;
      this.createChartColumn();
    });
  }
  addRow(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  updateRow(row: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const index = this.dataSource.data.indexOf(row);
        this.dataSource.data[index] = result;
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteRow(row: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const index = this.dataSource.data.indexOf(row);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  ngAfterViewInit(): void {
    (this.dataSource as MatTableDataSource<any>).paginator = this.paginator;
    // this.createChartColumn();
  }

  private createChartColumn(): void {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = months.map(month => ({
      name: month,
      y: this.getRandomNumber(20, 100),
    }));

    Highcharts.chart('chart-column' as any, {
      chart: {
        type: 'column',
        height: 250
      },
      title: { text: '' },
      credits: { enabled: false },
      xAxis: {
        categories: months,
        title: { text: 'Month' },
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { text: 'Security rating' },
      },
      series: [{
        name: 'Rating',
        data,
        color: '#7f56d9',
        type: 'column',
      }],
      tooltip: {
        pointFormat: 'Rating: <b>{point.y}</b>',
      },
      legend: { enabled: false },
    } as any);
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name}`;
  }
}