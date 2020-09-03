import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

    
// return queryResult.data.rates.find(({ currency } : ExchangeRate) => currency === 'COP');