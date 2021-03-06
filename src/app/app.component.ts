import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'SideMenuPage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];

    this.pages = [
      { title: 'Home', component: 'SideMenuPage', active: false, icon: 'home' },
      { title: 'My Address', component: 'SideMenuPage', active: false, icon: 'map' },
      { title: 'My Orders',
        component: 'SideMenuPage', active: false, icon: 'ionic' },
      { title: 'Venta', component: 'VentaProductoPage', active: false, icon: 'ionic' },
      { title: 'Detalles Cliente', component: 'ClientesDetallePage', active: false, icon: 'archive' },
      { title: 'Insertar Cliente', component: 'CreateClientePage', active: false, icon: 'body' },
      { title: 'Detalle Empleado', component: 'EmpleadosDetallePage', active: false, icon: 'bookmarks' },
      { title: 'Create Empleado', component: 'CreateEmpleadoPage', active: false, icon: 'book' },
      { title: 'Detalle Usuarios', component: 'UsuarioDetallePage', active: false, icon: 'map' },
      { title: 'Crear Usuario', component: 'CreateUsuarioPage', active: false, icon: 'map' },
      { title: 'Crear Marca', component: 'CreateMarcasPage', active: false, icon: 'map' },
      { title: 'Detalle Marca', component: 'MarcaDetallePage', active: false, icon: 'map' },
      { title: 'Crear TipoProducto', component: 'CreateTipoproductoPage', active: false, icon: 'map' },
      { title: 'Detalle TipoProducto', component: 'TipoproductoDetallePage', active: false, icon: 'map' },
      { title: 'Crear Proveedor', component: 'CreateProveedorPage', active: false, icon: 'map' },
      { title: 'Detalle Proveedor', component: 'ProveedorDetallePage', active: false, icon: 'map' },
      { title: 'Crear Producto', component: 'CreateProductoPage', active: false, icon: 'map' },
      { title: 'Detalle Producto', component: 'ProductoDetallePage', active: false, icon: 'map' },

    ]; 

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
