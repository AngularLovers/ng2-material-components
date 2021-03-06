import {DateRange} from '../../../../../src/models/date-range';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-date-range-picker',
    template: require('./date-range-picker.html'),
})
export class DemoDateRangePickerComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }

    rangeChanged(range: DateRange) {
        alert('Range Changed');
    }
}
