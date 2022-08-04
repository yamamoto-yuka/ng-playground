import { Component, OnInit, ElementRef, ViewChild,  } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss']
})
export class StarfieldComponent implements OnInit {
  @ViewChild('container', { static: true })
  container: ElementRef<HTMLDivElement>;
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    let scene, camera, renderer;
    let LINE_COUNT = 1000;
    let geom = new THREE.BufferGeometry();
    geom.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(6 * LINE_COUNT), 3)
    );
    geom.setAttribute(
      'velocity',
      new THREE.BufferAttribute(new Float32Array(2 * LINE_COUNT), 1)
    );
    let pos = geom.getAttribute('position');
    let pa = pos.array;
    let vel = geom.getAttribute('velocity');
    let va = vel.array;

    let init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        this.container.nativeElement.clientWidth /
          this.container.nativeElement.clientHeight,
        1,
        500
      );
      camera.position.z = 200;
      renderer = new THREE.WebGLRenderer({
        canvas: this.myCanvas.nativeElement,
        antialias: true,
      });
      renderer.setSize(
        this.container.nativeElement.clientWidth,
        this.container.nativeElement.clientHeight
      );


      for(let line_index = 0; line_index < LINE_COUNT; line_index++){
        let x = Math.random()*400 - 200;
        let y = Math.random()*200 - 100;
        let z = Math.random()*500 - 100;
        let xx = x;
        let zz = z;
        // Line start
        // pa[6*line_index] = x;
        // pa[6*line_index+1] = y;
        // pa[6*line_index+2] = z;

      }
    };
  }

}
