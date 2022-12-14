import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scrolltrigger',
  templateUrl: './scrolltrigger.component.html',
  styleUrls: ['./scrolltrigger.component.scss'],
})
export class ScrolltriggerComponent implements OnInit {
  @ViewChild('philosophie', { static: true })
  philosophie: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  scroll() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      markers: false,
    });

    let points = gsap.utils.toArray('.point');
    console.log(points);
    let indicators: any = gsap.utils.toArray('.indicator');

    let height = 100 * points.length;
    console.log(points.length);

    gsap.set('.indicators', { display: 'flex' });

    let tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: '.philosophie',
        start: 'top center',
        end: '+=' + height + '%',
        scrub: 2,
        id: 'points',
      },
    });

    let pinner = gsap.timeline({
      scrollTrigger: {
        trigger: '.philosophie .wrapper',
        start: 'top top',
        end: '+=' + height + '%',
        scrub: true,
        pin: '.philosophie .wrapper',
        pinSpacing: true,
        id: 'pinning',
      },
    });

    points.forEach((elem: any, i) => {
      console.log(elem);
      gsap.set(elem, { position: 'absolute', top: 0 });
      tl.to(indicators[i], { backgroundColor: '#917C46', duration: 0.3 }, i);
      tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector('article'),
        { autoAlpha: 0, translateY: 100 },
        i
      );
      if (i != points.length - 1) {
        tl.to(
          indicators[i],
          { backgroundColor: '#b59b59', duration: 0.3 },
          i + 0.75
        );
        tl.to(elem.querySelector('article'), { autoAlpha: 0 }, i + 0.75);
      }
    });
  }
}
