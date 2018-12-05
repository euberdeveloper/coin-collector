import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CoinsDB } from './indexed-db.class';
import { Parametro, Unit } from './indexed-db.interface';
import { conservazioni, contorni, denominazioni, materiali, rarita, segniZecche, sovranita, sovrani, stati, nominali, zecche, pesi, lunghezze } from './population.data';

export { Ambito, Parametro, Unit } from './indexed-db.interface';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private dbName = "my-coin-collector-newtest52";
  private db: CoinsDB;

  constructor() {
    this.db = new CoinsDB(this.dbName);
    this.onPopulate();
  }

  private onPopulate(): void {
    this.db.on('populate', () => {
      this.db.conservazioni.bulkPut(conservazioni);
      this.db.contorni.bulkPut(contorni);
      this.db.denominazioni.bulkPut(denominazioni);
      this.db.materiali.bulkPut(materiali);
      this.db.rarita.bulkPut(rarita);
      this.db.segniZecche.bulkPut(segniZecche);
      this.db.sovranita.bulkPut(sovranita);
      this.db.sovrani.bulkPut(sovrani);
      this.db.stati.bulkPut(stati);
      this.db.nominali.bulkPut(nominali);
      this.db.zecche.bulkPut(zecche);
      this.db.pesi.bulkPut(pesi);
      this.db.lunghezze.bulkPut(lunghezze);
    });
  }

  getAllParametri(name: string): Promise<Parametro[]> {
    return this.db.table<Parametro, number>(name).toArray();
  }

  addParameter(name: string, parametro: Parametro): Promise<number> {
    return this.db.table<Parametro, number>(name).add(parametro);
  }

  addParametri(name: string, parametri: Parametro[]): Promise<number> {
    return this.db.table<Parametro, number>(name).bulkPut(parametri);
  }

  removeParameter(name: string, id: number): Promise<void> {
    return this.db.table<Parametro, number>(name).delete(id);
  }

  removeAllParametri(name: string): Promise<void> {
    return this.db.table<Parametro, number>(name).clear();
  }

  swapParameters(name: string, x: Parametro, y: Parametro) {
    const temp = x.id;
    x.id = y.id;
    y.id = temp;
    return this.db.table<Parametro, number>(name).bulkPut([x, y]);
  }

  trackParametri(name: string): Observable<Parametro[]> {
    const context = this;
    return new Observable<Parametro[]>((observer) => {
      let creating, updating, deleting;
      
      context.db.table<Parametro, number>(name).hook('creating', creating = function (primKey, obj, transaction) {
        this.onsuccess = (key: number) => {
          console.log('%c ' + name + ' element by id ' + key + ' created succesfully', 'color: green;');
          context.getAllParametri(name)
            .then(parametri => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(parametri);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' creation error');
          observer.error(err);
        }
      });

      context.db.table<Parametro, number>(name).hook('updating', updating = function(modification, primKey, obj, transaction) {
        this.onsuccess = (obj: Parametro) => {
          console.log('%c ' + name + ' element ' + obj.id + ' updated succesfully', 'color: green;');
          context.getAllParametri(name)
            .then(parametri => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(parametri);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' updating error');
          observer.error(err);
        }
      });

      context.db.table<Parametro, number>(name).hook('deleting', deleting = function(primKey, obj, transaction) {
        this.onsuccess = () => {
          console.log('%c ' + name + ' element ' + obj.id + ' deleted succesfully', 'color: green;');
          context.getAllParametri(name)
            .then(parametri => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(parametri);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' deleting error');
          observer.error(err);
        }
      });

      return ({ unsubscribe() { 
        context.db.table<Parametro, number>(name).hook('deleting').unsubscribe(creating);
        context.db.table<Parametro, number>(name).hook('deleting').unsubscribe(updating);
        context.db.table<Parametro, number>(name).hook('deleting').unsubscribe(deleting);
      }});

    });
  }

  getAllUnits(name: string): Promise<Unit[]> {
    return this.db.table<Unit, number>(name).toArray();
  }

  addUnit(name: string, unit: Unit): Promise<number> {
    return this.db.table<Unit, number>(name).add(unit);
  }

  addUnits(name: string, units: Unit[]): Promise<number> {
    return this.db.table<Unit, number>(name).bulkPut(units);
  }

  toggleUnit(name: string, unit: Unit): Promise<number> {
    return this.db.table<Unit, number>(name).update(unit.id, { prefix: !unit.prefix });
  }

  removeUnit(name: string, id: number): Promise<void> {
    return this.db.table<Unit, number>(name).delete(id);
  }

  removeAllUnits(name: string): Promise<void> {
    return this.db.table<Unit, number>(name).clear();
  }

  swapUnits(name: string, x: Unit, y: Unit) {
    const temp = x.id;
    x.id = y.id;
    y.id = temp;
    return this.db.table<Unit, number>(name).bulkPut([x, y]);
  }

  trackUnits(name: string): Observable<Unit[]> {
    const context = this;
    return new Observable<Unit[]>((observer) => {
      let creating, updating, deleting;
      
      context.db.table<Unit, number>(name).hook('creating', creating = function (primKey, obj, transaction) {
        this.onsuccess = (key: number) => {
          console.log('%c ' + name + ' element by id ' + key + ' created succesfully', 'color: green;');
          context.getAllUnits(name)
            .then(unita => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(unita);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' creation error');
          observer.error(err);
        }
      });

      context.db.table<Unit, number>(name).hook('updating', updating = function(modification, primKey, obj, transaction) {
        this.onsuccess = (obj: Unit) => {
          console.log('%c ' + name + ' element ' + obj.id + ' updated succesfully', 'color: green;');
          context.getAllUnits(name)
            .then(unita => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(unita);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' updating error');
          observer.error(err);
        }
      });

      context.db.table<Unit, number>(name).hook('deleting', deleting = function(primKey, obj, transaction) {
        this.onsuccess = () => {
          console.log('%c ' + name + ' element ' + obj.id + ' deleted succesfully', 'color: green;');
          context.getAllUnits(name)
            .then(unit => {
              console.log('%c ' + name + ' getted succesfully', 'color: green;');
              observer.next(unit);
            })
            .catch(error => {
              console.error('getting ' + name + ' error');
              observer.error(error);
            });
        };
        this.onerror = (err) => {
          console.error(name + ' element ' + obj.id + ' deleting error');
          observer.error(err);
        }
      });

      return ({ unsubscribe() { 
        context.db.table<Unit, number>(name).hook('deleting').unsubscribe(creating);
        context.db.table<Unit, number>(name).hook('deleting').unsubscribe(updating);
        context.db.table<Unit, number>(name).hook('deleting').unsubscribe(deleting);
      }});

    });
  }
  
}
