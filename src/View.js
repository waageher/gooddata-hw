import React from 'react';
import { ColumnChart } from '@gooddata/react-components';

import DateHelper from './DateHelper.js';

class View {

    constructor(controller) {
        this.controller = controller;
    }

    renderMonthDropdown(defaultMonth) {
        const months = this.controller.getMonths();
        const monthNames = DateHelper.getMonthNames();
        return (
            <select data-type="month" defaultValue={months.defaultValue} onChange={(e) => this.controller.selectChange(e)}>
                {
                    months.values.map(function(month){
                        return (<option key={month} value={month}>{monthNames[month]}</option>);
                    })
                }
            </select>
        )
    }

    renderYearDropdown() {
        const years = this.controller.getYears();
        return (
            <select data-type="year" defaultValue={years.defaultValue} onChange={(e) => this.controller.selectChange(e)}>
                {
                    years.values.map(function(year){
                        return (<option key={year} value={year}>{year}</option>);
                    })
                }
            </select>
        )
    }

    render(projectId, filters, measures, viewBy) {
        return (
            <div className="App">
                <h1>$ Gross Profit in month {this.renderMonthDropdown()} {this.renderYearDropdown()}</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        filters={filters}
                        projectId={projectId}
                    />
                </div>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default View;
