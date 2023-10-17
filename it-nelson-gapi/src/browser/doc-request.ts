


export const  request_1 = [
    {
       insertText: {
           location: {
               index: 10,
           },
           text: "inserito: testo1 "
       }
   },
            {
       insertText: {
           location: {
               index: 50,
           },
           text: 'inserito: prova2'
       }
   },
            {
       insertText: {
           location: {
               index: 75,
           },
           text: 'inserito: ciao'
       }
   },
]

export const request_2 = [
{
    insertTable: {
        columns: 2,
        rows: 2,
        endOfSegmentLocation: {}
      }
},

    {
       insertText: {
           location: {
               index: 1,
           },
           text: "Ultima modifica ingrandimento 300\nCiao "
       }
   },
            {
       insertText: {
           location: {
               index: 1,
           },
           text: 'primo\u000bprova di shit+return\u000b '
       }
   },
            {
       insertText: {
           location: {
               index: 1,
           },
           text: 'Titolo \n secondo una teoria\nil giorno più lungo\n'
       }
   },


   {
    'insertInlineImage': {
        'location': {
            'index': 1
        },
        'uri':
           // 'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',
           //'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',           
           //'https://as2.ftcdn.net/v2/jpg/04/29/45/45/1000_F_429454544_JO37JwKGiuE6M4iIemgFA2TaxIQ9zPK9.jpg',
           'https://drive.google.com/uc?id=156mchMedY4EQ_ylAyQHoDuKDAEQuwFfv',
           
        'objectSize': {
            'height': {
                'magnitude': 300,
                'unit': 'PT'
            },
            'width': {
                'magnitude': 300,
                'unit': 'PT'
            }
        }
    }
}
]

export const request_3 = [
    {
        'insertTable':
        {
          'endOfSegmentLocation':
          {
            'segmentId': ''
          },
          'columns': 1,
          'rows': 1
        }
      },
      {
        'insertText':
        {
          'location':
          {
            'index': 5
          },
          'text': 'Cell content'
        }
      }
]

export const request_test = [
    {"insertTable":
    {"endOfSegmentLocation":
    {"segmentId":""},
    "columns":4,
    "rows":2}},
    {"insertText":{"location":{"index":5},"text":"A11"}},
    {"insertText":{"location":{"index":7},"text":"A12"}},
    {"insertText":{"location":{"index":9},"text":"A13"}},
    {"insertText":{"location":{"index":11},"text":"A14"}},
    {"insertText":{"location":{"index":14},"text":"A21"}},
    {"insertText":{"location":{"index":16},"text":"A22"}},
    {"insertText":{"location":{"index":18},"text":"A23"}},
    {"insertText":{"location":{"index":20},"text":"A24"}}

]



export const request_4 = [
    {
        'insertTable':
        {
          'endOfSegmentLocation':
          {
            'segmentId': ''
          },
          'columns': 4,
          'rows': 3
        }
      },
      /*  //2x2
      { 'insertText': { 'text': '  B2 5263,78 euro', 'location': { 'index': 12 } } },
      { 'insertText': { 'text': 'A2 23,56 ecco facciamo un test', 'location': { 'index': 10 } } },
      { 'insertText': { 'text': 'B1 test test test', 'location': { 'index': 7 } } },
      { 'insertText': { 'text': 'A13 questa è una prova', 'location': { 'index': 5 } } }
      */

      /* //3x2
     { 'insertText': { 'text': 'B3', 'location': { 'index': 17 } } },
     { 'insertText': { 'text': 'A3', 'location': { 'index': 15 } } },
     { 'insertText': { 'text': 'B2', 'location': { 'index': 12 } } },
     { 'insertText': { 'text': 'A2', 'location': { 'index': 10 } } },
     { 'insertText': { 'text': 'B1', 'location': { 'index': 7 } } },
     { 'insertText': { 'text': 'A1', 'location': { 'index': 5 } } }
     */

     /*
      //3x3  
     { 'insertText': { 'text': 'A33', 'location': { 'index': 23 } } },
     { 'insertText': { 'text': 'A32', 'location': { 'index': 21 } } },
     { 'insertText': { 'text': 'A31', 'location': { 'index': 19 } } },
     { 'insertText': { 'text': 'A23', 'location': { 'index': 16 } } },
     { 'insertText': { 'text': 'A22', 'location': { 'index': 14 } } },
     { 'insertText': { 'text': 'A21', 'location': { 'index': 12 } } },
     { 'insertText': { 'text': 'A13', 'location': { 'index': 9 } } },
     { 'insertText': { 'text': 'A12', 'location': { 'index': 7 } } },
     { 'insertText': { 'text': 'A11', 'location': { 'index': 5 } } }
*/

           //3x4 index parte da 5 aumenta di 2 per ogni colonna e di tre quando si va sulla riga successiva (leggendo la tabella da destra verso sinistra)
           { 'insertText': { 'text': 'A34', 'location': { 'index': 29 } } },           
           { 'insertText': { 'text': 'A33', 'location': { 'index': 27 } } },
           { 'insertText': { 'text': 'A32', 'location': { 'index': 25 } } },           
           { 'insertText': { 'text': 'A31', 'location': { 'index': 23 } } },

           { 'insertText': { 'text': 'A24', 'location': { 'index': 20 } } },
           { 'insertText': { 'text': 'A23', 'location': { 'index': 18 } } },
           { 'insertText': { 'text': 'A22', 'location': { 'index': 16 } } },
           { 'insertText': { 'text': 'A21', 'location': { 'index': 14 } } },

           { 'insertText': { 'text': 'A14', 'location': { 'index': 11 } } },
           { 'insertText': { 'text': 'A13', 'location': { 'index': 9 } } },
           { 'insertText': { 'text': 'A12', 'location': { 'index': 7 } } },
           { 'insertText': { 'text': 'A11', 'location': { 'index': 5 } } },




           {
            insertText: {
              text: "sample paragraph 1\n",
              endOfSegmentLocation: { segmentId: "" },
            },
          },
          {
            insertText: {
              text: "sample paragraph 2\n",
              endOfSegmentLocation: { segmentId: "" },
            },
          },
          {
            insertText: {
              text: "sample paragraph 3\n",
              endOfSegmentLocation: { segmentId: "" },
            },
          },



           {
            insertText: {
                location: {
                    index: 1,
                },
                text: "Ultima modifica ingrandimento 300\nCiao "
            }
        },
                 {
            insertText: {
                location: {
                    index: 1,
                },
                text: 'primo\u000bprova di shit+return\u000b '
            }
        },
                 {
            insertText: {
                location: {
                    index: 1,
                },
                text: '\nTitolo \n secondo una teoria\nil giorno più lungo\n'
            }
        },
     
     
        {
         'insertInlineImage': {
             'location': {
                 'index': 1
             },
             'uri':
                // 'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',
                //'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',           
                //'https://as2.ftcdn.net/v2/jpg/04/29/45/45/1000_F_429454544_JO37JwKGiuE6M4iIemgFA2TaxIQ9zPK9.jpg',
                'https://drive.google.com/uc?id=156mchMedY4EQ_ylAyQHoDuKDAEQuwFfv',
                
             'objectSize': {
                 'height': {
                     'magnitude': 300,
                     'unit': 'PT'
                 },
                 'width': {
                     'magnitude': 300,
                     'unit': 'PT'
                 }
             }
         }
     },

     {
        insertText: {
            location: {
                index: 1,
            },
            text: '\n\n\nTitolo \n Formulazione sistematica di principi generali relativi a una scienza, arte o branca del sapere,'+  
            'e anche delle deduzioni che da tali principi si possono ricavare,\nil giorno più lungo\n'
        }

    }

]


export const request_tb_1 = [
    {
      insertTable: {
        columns: 3,
        rows: 3,
        endOfSegmentLocation: {}
      }
    }
  ]


 export function creaReq(): any {

    console.log('test')
    let studata =  ['testo1', 'prova2', 'ciao']

   

        var studata2 = [];
        for (let w in studata) {
        studata2.push(

            {
                insertText: {
                    location: {
                        index: 1 + 20*Number(w),
                    },
                    text: "inserito: " + studata[w]
                }
            }       
        
        
        );
        }        
        console.log( JSON.stringify(studata2))    


    return studata2
 }



 export function creaReq_0(dati:any): any {

    let indice:number=5;
    let n_row:number=dati.length;
    let n_col:number=4;     


    let tpl = [];    

    for(let i = 0; i <= n_row-1; i++){
        if (i>0) { indice = indice + 2*(n_col-1) + 3}       
       
       //console.log('indice =' + indice)

       tpl.push(
        {
        insertText: {
            location: {
                index: indice ,
            },
            text: dati[i].firstName
        }
        },   

        {
            insertText: {
                location: {
                    index: indice+2,
                },
                text: dati[i].lastName
            }
        },

        {
            insertText: {
                location: {
                    index: indice+4,
                },
                text: 'età: '+ dati[i].age
            }
        },  

        {
            insertText: {
                location: {
                    index: indice+6,
                },
                text: 'n: ' + i
            }
        }  


        );


    }  

    tpl.push(
        {
            'insertTable':
            {
              'endOfSegmentLocation':
              {
                'segmentId': ''
              },
              'columns': n_col,
              'rows': n_row
            }
          }
    ); 

    tpl.reverse();     

    return tpl
 }


 export function creaReq_Aij(dati:any): any {
    
    var row_step:number=0;
    var indice:number=3;
    var count:number=1;
    let n_row:number=3;
    let n_col:number=4;

    var tpl = [];
   
    for(let i = 1; i <= n_row; i++){
        if (i>1) { row_step = 1} 
       
        for(let j = 1; j <= 4; j++){ 
            var indice = indice + 2 + row_step
            var count = count + 1           

            tpl.push(
            {
            insertText: {
                location: {
                    index: indice,
                },
                text: 'A'+i+j
            }
            }   
            );
            row_step = 0;
        }
             
    }  

    tpl.push(
        {
            'insertTable':
            {
              'endOfSegmentLocation':
              {
                'segmentId': ''
              },
              'columns': n_col,
              'rows': n_row
            }
          }
    ); 

    tpl.reverse();     

    return tpl
 }







