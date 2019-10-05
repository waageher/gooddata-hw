import DateHelper from './DateHelper.js';

class Model {

    grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
    dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
    dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

    getFilter(month, year) {
    	const firstDayOfMonth = new Date(year, month, 1);
    	const lastDayOfMonth = new Date(year, month + 1, 0);

        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: this.dateAttribute
                },
                from: DateHelper.formatDate(firstDayOfMonth),
                to: DateHelper.formatDate(lastDayOfMonth)
            }

        }
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: this.grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: this.dateAttributeInMonths
                },
                localIdentifier: 'a1'
            }
        }
    }

    getAllYears() {
        return [2015, 2016, 2017];
    }

    getAllMonths() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
}

export default Model;
