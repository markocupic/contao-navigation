<?php

declare(strict_types=1);

/*
 * This file is part of Contao Navigation.
 *
 * (c) Marko Cupic <m.cupic@gmx.ch>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-navigation
 */

namespace Markocupic\ContaoNavigation\ContaoManager;

use Markocupic\ContaoNavigation\MarkocupicContaoNavigation;
use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;

class Plugin implements BundlePluginInterface
{
    /**
     * @return array
     */
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create(MarkocupicContaoNavigation::class)
                ->setLoadAfter([ContaoCoreBundle::class]),
        ];
    }
}
