import { CommonModule } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';

import { IterableDiffers, TemplateRef, ViewContainerRef } from '@angular/core';
import { VirtualRepeatAsynch } from './virtual-repeat-asynch';
import { VirtualRepeatContainer } from './virtual-repeat-container';
import { VirtualRepeatRow } from './virtual-repeat.base';

describe('VirtualRepeat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      providers: [
        VirtualRepeatContainer, TemplateRef, ViewContainerRef
      ]
    });
  });
  
  it('should create', inject([ IterableDiffers, VirtualRepeatContainer, TemplateRef, ViewContainerRef ], 
    (iterableDiffers: IterableDiffers, 
      virtualRepeatContainer: VirtualRepeatContainer,
      template: TemplateRef<VirtualRepeatRow>,
      viewContainerRef: ViewContainerRef) => {
    const directive = new VirtualRepeatAsynch(virtualRepeatContainer,
      iterableDiffers,
      template,
      viewContainerRef);
    expect(directive).toBeTruthy();
  }));
});