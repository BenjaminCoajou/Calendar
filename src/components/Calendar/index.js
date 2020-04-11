import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import './style.css';

const Calendar = () => (
    <div>
        <div>
            <span><IoIosArrowBack/></span>
            <span>Avril</span>
            <span>2020</span>
            <span><IoIosArrowForward/></span>
        </div>
        <div>
            <table>
                <thead>
                    <tr>           
                        <th> Lundi </th>
                        <th> Mardi </th>
                        <th> Mercredi </th>
                        <th> Jeudi </th>
                        <th> Vendredi </th>
                        <th> Samedi </th>
                        <th> Dimanche </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Calendar;