import { defineStore } from 'pinia';

export const useBanksStore = defineStore('bancos', {
  state: () => ({
    optionsBanks: [
      {
        value: '001',
        label: '001 - BANCO BRASIL S/A',
      },
      {
        value: '002',
        label: '002 - BANCO CENTRAL DO BRASIL',
      },
      {
        value: '003',
        label: '003 - BANCO DA AMAZONIA S/A',
      },
      {
        value: '004',
        label: '004 - BANCO DO NORDESTE BRASIL S/A',
      },
      {
        value: '008',
        label: '008 - BANCO SANTANDER MERIDIONAL S/A',
      },
      {
        value: '021',
        label: '021 - BANCO DO ESTADO ESP. SANTO S/A',
      },
      {
        value: '024',
        label: '024 - BANCO DO ESTADO PERNAMBUCO S/A',
      },
      {
        value: '027',
        label: '027 - BANCO DO EST. STA CATARINA S/A',
      },
      {
        value: '029',
        label: '029 - BANCO DO EST. RIO JANEIRO S/A',
      },
      {
        value: '031',
        label: '031 - BANCO DO ESTADO DE GOIAS S/A',
      },
      {
        value: '033',
        label: '033 - BANCO SANTANDER S/A',
      },
      {
        value: '035',
        label: '035 - BANCO DO ESTADO DO CEARA S/A',
      },
      {
        value: '036',
        label: '036 - BANCO DO ESTADO MARANHAO S/A',
      },
      {
        value: '037',
        label: '037 - BANCO DO ESTADO DO PARA S/A',
      },
      {
        value: '038',
        label: '038 - BANCO BANESTADO S/A',
      },
      {
        value: '039',
        label: '039 - BANCO DO ESTADO DO PIAUI',
      },
      {
        value: '040',
        label: '040 - BANCO CARGILL S.A',
      },
      {
        value: '041',
        label: '041 - BANCO DO ESTADO R.G. SUL S/A',
      },
      {
        value: '044',
        label: '044 - BANCO BVA SA',
      },
      {
        value: '045',
        label: '045 - BANCO OPPORTUNITY S.A.',
      },
      {
        value: '047',
        label: '047 - BANCO DO ESTADO DE SERGIPE S/A',
      },
      {
        value: '062',
        label: '062 - BANCO1.NET S.A',
      },
      {
        value: '063',
        label: '063 - BANCO IBI S.A.',
      },
      {
        value: '066',
        label: '066 - BANCO MORGAN STANLEY DEAN WITT',
      },
      {
        value: '067',
        label: '067 - BANCO BANEB SA',
      },
      {
        value: '068',
        label: '068 - BANCO BEA S.A',
      },
      {
        value: '070',
        label: '070 - BRB - BANCO DE BRASILIA S/A',
      },
      {
        value: '072',
        label: '072 - BANCO RURAL MAIS S.A',
      },
      {
        value: '073',
        label: '073 - BANCO POPULAR DO BRASIL S.A.',
      },
      {
        value: '074',
        label: '074 - BANCO J. SAFRA S.A.',
      },
      {
        value: '107',
        label: '107 - BANCO BBM S.A',
      },
      {
        value: '109',
        label: '109 - BANCO CREDIBANCO S/A',
      },
      {
        value: '116',
        label: '116 - BANCO BNL DO BRASIL S/A',
      },
      {
        value: '148',
        label: '148 - MULTI BANCO S.A.',
      },
      {
        value: '151',
        label: '151 - BANCO NOSSA CAIXA S/A',
      },
      {
        value: '175',
        label: '175 - BANCO FINASA S.A.',
      },
      {
        value: '184',
        label: '184 - BANCO ITAU - BBA S/A',
      },
      {
        value: '204',
        label: '204 - BANCO SRL S/A',
      },
      {
        value: '210',
        label: '210 - DRESDNER BANK LATEINAMERIKA AK',
      },
      {
        value: '213',
        label: '213 - BANCO ARBI S.A.',
      },
      {
        value: '214',
        label: '214 - BANCO DIBENS S/A',
      },
      {
        value: '215',
        label: '215 - BANCO AMERICA DO SUL S/A',
      },
      {
        value: '217',
        label: '217 - BANCO JOHN DEERE S.A.',
      },
      {
        value: '219',
        label: '219 - BANCO ZOGBI S.A.',
      },
      {
        value: '222',
        label: '222 - BANCO CALYON BRASIL S.A.',
      },
      {
        value: '225',
        label: '225 - BANCO BRASCAN S/A',
      },
      {
        value: '229',
        label: '229 - BANCO CRUZEIRO DO SUL S.A.',
      },
      {
        value: '230',
        label: '230 - UNICARD BANCO MULTIPLO S.A.',
      },
      {
        value: '233',
        label: '233 - BANCO GE CAPITAL S.A',
      },
      {
        value: '237',
        label: '237 - BANCO BRADESCO S/A',
      },
      {
        value: '240',
        label: '240 - BANCO DE CREDITO REAL DE MINAS',
      },
      {
        value: '241',
        label: '241 - BANCO CLASSICO S.A.',
      },
      {
        value: '246',
        label: '246 - BANCO ABC BRASIL S/A',
      },
      {
        value: '247',
        label: '247 - BANCO UBS S.A.',
      },
      {
        value: '248',
        label: '248 - BANCO BOAVISTA INTERATLANTICO',
      },
      {
        value: '249',
        label: '249 - BANCO INVESTCRED',
      },
      {
        value: '250',
        label: '250 - BANCO SCHAHIN S.A.',
      },
      {
        value: '252',
        label: '252 - BANCO FININVEST S/A',
      },
      {
        value: '254',
        label: '254 - PARANA BANCO S.A.',
      },
      {
        value: '263',
        label: '263 - BANCO CACIQUE S/A',
      },
      {
        value: '265',
        label: '265 - BANCO FATOR S.A.',
      },
      {
        value: '266',
        label: '266 - BANCO CEDULA S.A.',
      },
      {
        value: '300',
        label: '300 - BANCO DE LA NACION ARGENTINA',
      },
      {
        value: '320',
        label: '320 - BANCO IND. E COMERCIAL S/A',
      },
      {
        value: '341',
        label: '341 - BANCO ITAU S/A',
      },
      {
        value: '347',
        label: '347 - BANCO SUDAMERIS DO BRASIL S/A',
      },
      {
        value: '351',
        label: '351 - BANCO SANTANDER S/A',
      },
      {
        value: '353',
        label: '353 - BANCO SANTANDER BRASIL S/A',
      },
      {
        value: '356',
        label: '356 - BANCO ABN AMRO S/A',
      },
      {
        value: '366',
        label: '366 - BANCO SOCIETE GENERALE BRASIL',
      },
      {
        value: '370',
        label: '370 - BANCO WESTLB DO BRASIL S.A.',
      },
      {
        value: '376',
        label: '376 - BANCO CHASE MANHATTAN S/A',
      },
      {
        value: '389',
        label: '389 - BANCO MERCANTIL DO BRASIL S/A',
      },
      {
        value: '394',
        label: '394 - Banco Bradesco Financiamentos',
      },
      {
        value: '399',
        label: '399 - HSBC BANK  BRASIL S/A',
      },
      {
        value: '409',
        label: '409 - UNIBANCO UNIAO DE B BRASILEIRO',
      },
      {
        value: '412',
        label: '412 - BANCO CAPITAL S.A.',
      },
      {
        value: '422',
        label: '422 - BANCO SAFRA S/A',
      },
      {
        value: '453',
        label: '453 - BANCO RURAL S/A',
      },
      {
        value: '472',
        label: "472 - LLOYD'S BANK",
      },
      {
        value: '479',
        label: '479 - BANCO DE BOSTON S/A',
      },
      {
        value: '487',
        label: '487 - DEUTSCHE BANK S.A.',
      },
      {
        value: '488',
        label: '488 - BANCO J.P. MORGAN S.A.',
      },
      {
        value: '492',
        label: '492 - ING BANK',
      },
      {
        value: '493',
        label: '493 - BANCO UNION C.A.',
      },
      {
        value: '494',
        label: '494 - BANCO DE LA REPUB. DEL URUGUAY',
      },
      {
        value: '495',
        label: '495 - BANCO DE LA PROVINCIA DE BUENO',
      },
      {
        value: '496',
        label: '496 - BANCO UNO-E BRASIL S.A',
      },
      {
        value: '505',
        label: '505 - BANCO CREDIT SUISSE FIRST BOST',
      },
      {
        value: '600',
        label: '600 - BANCO LUSO BRASILEIRO S.A.',
      },
      {
        value: '604',
        label: '604 - BANCO INDUSTRIAL DO BRASIL S.',
      },
      {
        value: '610',
        label: '610 - BANCO VR S/A',
      },
      {
        value: '611',
        label: '611 - BANCO PAULISTA S/A',
      },
      {
        value: '612',
        label: '612 - BANCO GUANABARA S/A',
      },
      {
        value: '633',
        label: '633 - BANCO RENDIMENTO S/A',
      },
      {
        value: '634',
        label: '634 - BANCO TRIANGULO S.A.',
      },
      {
        value: '638',
        label: '638 - BANCO PROSPER S.A.',
      },
      {
        value: '650',
        label: '650 - BANCO PEBB S.A.',
      },
      {
        value: '652',
        label: '652 - BANCO FRANCES E BRASILEIRO SA',
      },
      {
        value: '655',
        label: '655 - BANCO VOTORANTIM S/A',
      },
      {
        value: '702',
        label: '702 - BANCO SANTOS S/A',
      },
      {
        value: '707',
        label: '707 - BANCO DAYCOVAL S.A.',
      },
      {
        value: '719',
        label: '719 - BANCO BANIF PRIMUS S.A.',
      },
      {
        value: '721',
        label: '721 - BANCO CREDIBEL S.A.',
      },
      {
        value: '734',
        label: '734 - BANCO GERDAU S.A.',
      },
      {
        value: '738',
        label: '738 - BANCO MORADA S.A.',
      },
      {
        value: '739',
        label: '739 - BANCO BGN S.A.',
      },
      {
        value: '740',
        label: '740 - BANCO BARCLAYS E GALICIA S.A.',
      },
      {
        value: '741',
        label: '741 - BANCO RIBEIRAO PRETO S.A.',
      },
      {
        value: '744',
        label: '744 - BANKBOSTON N.A.',
      },
      {
        value: '745',
        label: '745 - BANCO CITIBANK S/A',
      },
      {
        value: '747',
        label: '747 - BCO RABOBANK INT.DO BRASIL S/A',
      },
      {
        value: '749',
        label: '749 - BANCO SIMPLES S.A.',
      },
      {
        value: '751',
        label: '751 - DRESDNER BANK BRASIL S.A. BANC',
      },
      {
        value: '752',
        label: '752 - BANCO BANQUE NATIONALE DE PARI',
      },
      {
        value: '753',
        label: '753 - BANCO COMERCIAL URUGUAI S.A.',
      },
      {
        value: '756',
        label: '756 - BANCOOB - BCO COOP. BRASIL S.A',
      },
      {
        value: '757',
        label: '757 - BANCO KEB DO BRASIL S.A.',
      },
    ],
  }),
});
