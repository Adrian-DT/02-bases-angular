# 🚀 Bases de Angular - Proyecto de Aprendizaje

<div align="center">

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" width="120"/>

![Angular](https://img.shields.io/badge/Angular-20.1.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![Signals](https://img.shields.io/badge/Angular_Signals-✨-green?style=for-the-badge)

**Un proyecto completo para dominar los fundamentos de Angular con las características más modernas del framework**

</div>

## 📑 Tabla de Contenidos
- [📋 Descripción](#-descripción)
- [✨ Características Principales](#-características-principales)
  - [🎯 Funcionalidades Implementadas](#-funcionalidades-implementadas)
  - [🛠️ Tecnologías y Conceptos](#️-tecnologías-y-conceptos)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [🎮 Funcionalidades por Página](#-funcionalidades-por-página)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🔧 Configuración del Proyecto](#-configuración-del-proyecto)
- [📚 Conceptos de Aprendizaje](#-conceptos-de-aprendizaje)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [👨‍💻 Autor](#-autor)

## 📋 Descripción

Este proyecto es una implementación práctica de los conceptos fundamentales de Angular, diseñado para explorar y dominar las bases del framework más popular para el desarrollo de aplicaciones web. Incluye ejemplos prácticos con **Angular Signals**, **Change Detection Strategy**, y técnicas avanzadas de desarrollo.

## ✨ Características Principales

### 🎯 Funcionalidades Implementadas
- **📊 Counter Component**: Contador interactivo con signals y change detection optimizada
- **🦸‍♂️ Hero Management**: Gestión de héroes con signals computadas y transformaciones
- **🐉 Dragon Ball Components**: Implementación de componentes temáticos con mejores prácticas
- **🔄 Routing Avanzado**: Sistema de navegación con rutas protegidas y redirecciones

### 🛠️ Tecnologías y Conceptos
- ✅ **Angular Signals** - Estado reactivo moderno
- ✅ **Change Detection Strategy** - Optimización de rendimiento
- ✅ **Computed Signals** - Valores derivados automáticos
- ✅ **Component Architecture** - Estructura modular y reutilizable
- ✅ **TypeScript** - Tipado fuerte y desarrollo seguro
- ✅ **Angular Router** - Navegación SPA completa

## 🏗️ Estructura del Proyecto

```text
src/app/
├── components/           # Componentes reutilizables
│   ├── dragonball/       # Componentes específicos de Dragon Ball
│   └── shared/           # Componentes compartidos
├── pages/                # Páginas principales
│   ├── counter/          # Página del contador
│   ├── hero/             # Gestión de héroes
│   ├── dragonball/       # Página Dragon Ball
│   └── dragonball-super/ # Página Dragon Ball Super
├── interfaces/           # Definiciones de tipos
├── services/             # Servicios de la aplicación
└── app.routes.ts         # Configuración de rutas
```

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js (versión 18 o superior)
- Angular CLI

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Adrian-DT/02-bases-angular.git
   cd 02-bases-angular
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   ng serve
   ```

4. **Abre tu navegador**
   ```
   http://localhost:4200
   ```

## 🎮 Funcionalidades por Página

### 🔢 Counter Page
- Contador con incremento/decremento
- Implementación de signals para estado reactivo
- Botones de reset y operaciones personalizadas

### 🦸‍♂️ Hero Page  
- Gestión de información de héroes
- Signals computadas para descripciones automáticas
- Transformaciones de texto con pipes

### 🐉 Dragon Ball Pages
- Componentes temáticos de Dragon Ball
- Implementación de mejores prácticas de Angular
- Navegación entre diferentes vistas

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo
npm run build          # Build de producción
npm run watch          # Build en modo watch
npm test               # Ejecuta tests unitarios

# Angular CLI
ng generate component  # Genera nuevo componente
ng generate service    # Genera nuevo servicio
ng build --prod        # Build optimizado para producción
```

## 🔧 Configuración del Proyecto

El proyecto utiliza las siguientes configuraciones:

- **Change Detection**: OnPush para optimización de rendimiento
- **Prettier**: Configurado para formateo automático de código
- **TypeScript**: Configuración estricta para desarrollo seguro
- **Angular Router**: Sistema de rutas con redirección automática

## 📚 Conceptos de Aprendizaje

Este proyecto te ayudará a dominar:

1. **Signals en Angular** - El nuevo sistema de reactividad
2. **Component Lifecycle** - Ciclo de vida de componentes
3. **Change Detection** - Optimización de rendimiento
4. **Routing** - Navegación entre vistas
5. **Services & Dependency Injection** - Arquitectura de servicios
6. **TypeScript** - Tipado fuerte en aplicaciones Angular

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres mejorar este proyecto:

1. Fork el repositorio  
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)  
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)  
4. Push a la rama (`git push origin feature/AmazingFeature`)  
5. Abre un Pull Request  

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Adrian-DT** - [GitHub Profile](https://github.com/Adrian-DT)

---

<div align="center">

**⭐ Si este proyecto te ayudó a aprender Angular, no olvides darle una estrella ⭐**

*Construido con ❤️*

</div>
