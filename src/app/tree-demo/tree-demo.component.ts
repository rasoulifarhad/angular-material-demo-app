import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { noop } from 'rxjs';


interface CourseNode {

  name: string;
  children?: CourseNode[];
}


interface CourseFlatNode {
  name: string;
  expandable: boolean;
  level: number;
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Angular For Beginners',
    children: [
      {
        name: 'Introduction to Angular'
      },
      {
        name: 'Angular Component @Input()'
      },
      {
        name: 'Angular Component @Output()'
      }
    ],
  },
  {
    name: 'Angular Material In Depth',
    children: [
      {
        name: 'Introduction to Angular Material',
        children: [
          {
            name: 'Form Components'
          },
          {
            name: 'Navigation and Containers'
          }
        ],
      },
      {
        name: 'Advanced Angular Material',
        children: [
          {
            name: 'Custom Themes'
          },
          {
            name: 'Tree Components'
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {


  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();

  nestedTreeControl  = new NestedTreeControl<CourseNode>(node => node.children);

  flatTreeControl = new FlatTreeControl<CourseFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlatener = new MatTreeFlattener(
    (node: CourseNode, level: number) : CourseFlatNode => {
      return {
        name: node.name,
        expandable: node.children!.length > 0,
        level
      }
    },
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  flatDataSource = new MatTreeFlatDataSource(this.flatTreeControl, this.treeFlatener);


  ngOnInit() {
    this.nestedDataSource.data = TREE_DATA;
    this.flatDataSource.data = TREE_DATA;
  }

  hasNestedChild(index: number, node:CourseNode) {
    return (node.children && node.children.length > 0) ? true : false ;
  }

  hasFlatChild(index: number, node:CourseFlatNode) {
    return node.expandable;
  }

}
